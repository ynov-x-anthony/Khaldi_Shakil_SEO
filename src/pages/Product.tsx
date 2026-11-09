import { useSearchParams } from 'react-router-dom'
import { products } from '../data'

// Mission :
// - utilise useDocumentMeta pour poser un <title> et une meta description
//   propres à CE produit (pas le titre générique du site)
// - remplace le <h3> par un <h1> (hiérarchie)
// - ajoute un bloc "Produits similaires" qui pointe vers les autres fiches
//   (maillage interne) : pour l'instant, rien n'y mène depuis cette page

export default function Product() {
  const [params] = useSearchParams()
  const id = Number(params.get('id'))
  const product = products.find((p) => p.id === id)

  if (!product) return <p className="page">Produit introuvable.</p>

  return (
    <div className="page">
      <h3>{product.name}</h3>
      <p className="price">{product.price} €</p>
      <p>{product.description}</p>
    </div>
  )
}
