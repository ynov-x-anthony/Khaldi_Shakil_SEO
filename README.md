# Quête 3 : SEO on-page

**Mission** : `Home.tsx` et `Product.tsx` fonctionnent, mais rien n'est
optimisé pour le référencement.

## Checklist à cocher

- [ ] URLs propres : `/produits/:slug` (ex. `/produits/velo-electrique-pliable`) au lieu de `/product?id=1`
- [ ] Appeler `useDocumentMeta` (déjà fourni dans `src/useDocumentMeta.ts`) sur `Home` **et** `Product`, avec un `title` unique par page (~50-60 caractères, mot-clé en premier) et une `description`
- [ ] `<h1>` pour le nom du produit (plus de `<h3>`)
- [ ] Un bloc "Produits similaires" sur la fiche produit, avec des vrais liens vers les autres fiches (maillage interne)

## Démarrer

```bash
npm install
npm run dev
```

<details>
<summary>💡 Indice 1 : passer de la query string à une route dynamique</summary>

Dans `App.tsx` : `<Route path="/produits/:slug" element={<Product />} />`.
Dans `Product.tsx` : `const { slug } = useParams()`, puis
`products.find(p => p.slug === slug)`. N'oublie pas de mettre à jour les
`<Link>` dans `Home.tsx`.

</details>

<details>
<summary>💡 Indice 2 : appeler le hook</summary>

```tsx
useDocumentMeta({
  title: `${product.name} | CycloShop`,
  description: product.description,
})
```

Fais pareil dans `Home.tsx` avec un titre/description qui décrit la page d'accueil, pas le produit.

</details>

<details>
<summary>✅ Solution : Product.tsx</summary>

```tsx
import { useParams, Link } from 'react-router-dom'
import { products } from '../data'
import { useDocumentMeta } from '../useDocumentMeta'

export default function Product() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  useDocumentMeta({
    title: product ? `${product.name} | CycloShop` : 'Produit introuvable | CycloShop',
    description: product?.description,
  })

  if (!product) return <p className="page">Produit introuvable.</p>

  const similar = products.filter((p) => p.id !== product.id)

  return (
    <div className="page">
      <h1>{product.name}</h1>
      <p className="price">{product.price} €</p>
      <p>{product.description}</p>

      <h2>Produits similaires</h2>
      <ul>
        {similar.map((p) => (
          <li key={p.id}><Link to={`/produits/${p.slug}`}>{p.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}
```

</details>
