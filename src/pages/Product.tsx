import { useParams } from 'react-router-dom'
import { products } from '../data'

// Mission : quelle que soit la route visitée, l'onglet affiche toujours le
// même titre générique, et un lien partagé sur les réseaux sociaux montre
// toujours le même aperçu (og:title/og:description jamais mis à jour).
// C'est exactement le problème SEO des SPA vu dans la quête.

export default function Product() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  if (!product) return <p className="page">Produit introuvable.</p>

  return (
    <div className="page">
      <h1>{product.name}</h1>
      <p className="price">{product.price} €</p>
      <p>{product.description}</p>
    </div>
  )
}
