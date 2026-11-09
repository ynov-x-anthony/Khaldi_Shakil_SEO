import { Link } from 'react-router-dom'
import { products } from '../data'

// Mission : le <title> de l'onglet ne change jamais ("Vite + React + TS"),
// et les liens produits utilisent ?id=... au lieu d'une URL propre.

export default function Home() {
  return (
    <div className="page">
      <h1>CycloShop</h1>
      <p>Tout l'équipement pour rouler en ville, toute l'année.</p>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/product?id=${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
