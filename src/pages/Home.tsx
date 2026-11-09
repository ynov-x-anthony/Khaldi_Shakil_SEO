import { Link } from 'react-router-dom'
import { products } from '../data'

export default function Home() {
  return (
    <div className="page">
      <h1>CycloShop</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}><Link to={`/produits/${p.slug}`}>{p.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}
