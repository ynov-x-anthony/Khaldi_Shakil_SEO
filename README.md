# Quête 4 : Les fondamentaux du SEO technique

**Mission** : ce catalogue a 3 trous techniques classiques.

## Checklist à cocher

- [ ] Créer `public/robots.txt` : autoriser le crawl général, interdire `/admin`, référencer le sitemap
- [ ] Créer `public/sitemap.xml` listant `/produits`
- [ ] Dans `Catalogue.tsx`, poser une balise canonique (via `useDocumentMeta`) qui pointe **toujours** vers `/produits?tri=prix`, que l'utilisateur soit arrivé par `?tri=prix` ou `?tri=prix-asc`
- [ ] Répondre aux 3 questions de [`REFLEXION.md`](./REFLEXION.md)

## Démarrer

```bash
npm install
npm run dev
```

Les fichiers dans `public/` sont servis tels quels à la racine (`/robots.txt`, `/sitemap.xml`).

<details>
<summary>💡 Indice 1 : robots.txt</summary>

```
User-agent: *
Disallow: /admin
Allow: /

Sitemap: https://cycloshop.exemple.fr/sitemap.xml
```

</details>

<details>
<summary>💡 Indice 2 : la balise canonique</summary>

```tsx
useDocumentMeta({
  title: 'Nos produits | CycloShop',
  canonical: 'https://cycloshop.exemple.fr/produits?tri=prix',
})
```

Rappelle-toi : `robots.txt` empêche le **crawl**, pas le choix de quelle URL
indexer parmi plusieurs qui se ressemblent : c'est exactement le rôle de la
balise canonique.

</details>

<details>
<summary>✅ Solution : sitemap.xml</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cycloshop.exemple.fr/produits</loc>
  </url>
</urlset>
```

Et pour `REFLEXION.md` : `robots.txt` bloque uniquement l'**exploration** ; une
page dupliquée peut quand même être indexée si un lien externe y mène. La
balise canonique, elle, dit explicitement à Google "voici LA version de
référence parmi ces URLs qui se ressemblent" : c'est un problème de
déduplication à l'indexation, pas d'exploration.

</details>
