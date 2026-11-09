import { Link } from 'react-router-dom'
import { products } from '../data'
import { useDocumentMeta } from '../useDocumentMeta'

// Mission : le <title> de l'onglet ne change jamais ("Vite + React + TS"),
// et les liens produits utilisent ?id=... au lieu d'une URL propre.

export default function Home() {
  useDocumentMeta({
    title: 'CycloShop | Équipement vélo urbain toute l\'année',
    description:
      "CycloShop : tout l'équipement pour rouler en ville, toute l'année. Découvrez nos produits pour cyclistes urbains.",
  })

  return (
    <div className="page">
      <h1>CycloShop</h1>
      <p>Tout l'équipement pour rouler en ville, toute l'année.</p>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/produits/${p.slug}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
