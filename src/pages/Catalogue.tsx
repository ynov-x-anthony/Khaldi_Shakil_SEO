import { useSearchParams } from 'react-router-dom'
import { products } from '../data'

// Mission : /produits?tri=prix et /produits?tri=prix-asc affichent EXACTEMENT
// la même liste (duplicate content, 2 URLs pour le même contenu). Pose une
// balise canonique qui pointe toujours vers la version "prix".

export default function Catalogue() {
  const [params] = useSearchParams()
  const tri = params.get('tri')

  const sorted = tri === 'prix' || tri === 'prix-asc'
    ? [...products].sort((a, b) => a.price - b.price)
    : products

  return (
    <div className="page">
      <h1>Nos produits</h1>
      <ul>
        {sorted.map((p) => (
          <li key={p.id}>{p.name} - {p.price} €</li>
        ))}
      </ul>
    </div>
  )
}
