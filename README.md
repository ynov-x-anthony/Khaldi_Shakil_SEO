# Quête 6 : SEO des applications React et introduction au SEA

**Mission** : ce catalogue a le problème SEO classique d'une SPA : le
`<title>` et les balises `og:*` ne bougent jamais, quelle que soit la route.

## Checklist à cocher

- [ ] Appeler `useDocumentMeta` (fourni) sur `Product.tsx` avec `title`, `description`, `ogTitle`, `ogDescription` propres à chaque produit
- [ ] Vérifier dans l'onglet navigateur ET dans l'inspecteur (`document.querySelector('meta[property="og:title"]')`) que ça change bien en changeant de route
- [ ] Répondre à [`SSR_SSG.md`](./SSR_SSG.md)
- [ ] Bonus : [`SEA_BRIEF.md`](./SEA_BRIEF.md)

## Démarrer

```bash
npm install
npm run dev
```

<details>
<summary>💡 Indice 1 : appeler le hook avec les champs OG</summary>

```tsx
useDocumentMeta({
  title: `${product.name} | CycloShop`,
  description: product.description,
  ogTitle: `${product.name} - CycloShop`,
  ogDescription: product.description,
})
```

</details>

<details>
<summary>💡 Indice 2 : pourquoi ça ne suffit pas toujours</summary>

Même corrigé, ce changement se fait **après** l'exécution du JS. Un crawler
qui n'exécute pas JS (ou certains bots de réseaux sociaux) ne verra toujours
que le HTML de départ. C'est exactement l'argument en faveur du SSR/SSG :
développe cette idée dans `SSR_SSG.md`.

</details>

<details>
<summary>✅ Solution</summary>

```tsx
export default function Product() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  useDocumentMeta({
    title: product ? `${product.name} | CycloShop` : 'Produit introuvable',
    description: product?.description,
    ogTitle: product ? `${product.name} - CycloShop` : undefined,
    ogDescription: product?.description,
  })

  if (!product) return <p className="page">Produit introuvable.</p>

  return (
    <div className="page">
      <h1>{product.name}</h1>
      <p className="price">{product.price} €</p>
      <p>{product.description}</p>
    </div>
  )
}
```

</details>
