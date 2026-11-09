# Quête 5 : Core Web Vitals

**Mission** : 3 problèmes volontaires dégradent respectivement le LCP, le CLS
et l'INP de cette page. Lance `npm run build && npm run preview`, ouvre
Lighthouse (DevTools → Lighthouse → catégorie Performance) et corrige.

## Checklist à cocher

- [ ] **CLS #1** : l'image n'a ni `width`/`height` ni `aspect-ratio` CSS → réserve l'espace pour qu'elle n'empile rien quand elle apparaît
- [ ] **CLS #2** : le bandeau "Livraison offerte" apparaît après coup et pousse le contenu → réserve-lui de la place (ou affiche-le dès le départ, masqué par opacité plutôt que retiré du flux)
- [ ] **INP** : le calcul de points fidélité gèle la page → découpe le calcul pour ne jamais bloquer le thread principal plus de ~50ms d'un coup

## Démarrer

```bash
npm install
npm run dev
```

<details>
<summary>💡 Indice 1 : l'image</summary>

```tsx
<img src={HERO} alt="Vélo électrique pliable" width={800} height={400} style={{ aspectRatio: '800 / 400', width: '100%', height: 'auto' }} />
```

Avec `width`/`height` posés, le navigateur réserve l'espace **avant** même
d'avoir décodé l'image : plus aucun saut de mise en page.

</details>

<details>
<summary>💡 Indice 2 : le bandeau</summary>

Au lieu de ne pas le monter du tout avant `showBanner`, réserve-lui sa hauteur
dès le départ (`min-height` sur un conteneur toujours présent), ou affiche-le
immédiatement sans délai artificiel si rien ne justifie vraiment ce délai.

</details>

<details>
<summary>💡 Indice 3 : découper le calcul</summary>

Remplace la boucle unique par des tranches, rendues entre deux `setTimeout(0)`
pour laisser le thread principal respirer :

```tsx
function calculerPoints() {
  let total = 0
  let i = 0
  function step() {
    const end = Math.min(i + 2_000_000, 400_000_000)
    for (; i < end; i++) total += Math.sqrt(i) % 7
    if (i < 400_000_000) {
      setTimeout(step, 0)
    } else {
      setPoints(Math.round(total % 1000))
    }
  }
  step()
}
```

Pour aller plus loin : un **Web Worker** ferait tourner tout le calcul hors du
thread principal, sans même avoir besoin de le découper.

</details>

<details>
<summary>✅ Solution : résumé</summary>

Les 3 corrections (dimensions explicites sur l'image, espace réservé pour le
bandeau, calcul découpé en tranches) suffisent à faire passer les 3 métriques
dans le vert sur un audit Lighthouse local.

</details>
