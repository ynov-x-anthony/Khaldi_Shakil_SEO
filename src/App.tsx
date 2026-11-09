import { Routes, Route, Link } from 'react-router-dom'
import Catalogue from './pages/Catalogue'

function Home() {
  return (
    <div className="page">
      <h1>CycloShop - catalogue</h1>
      <p>Deux liens de tri, pour le même résultat trié :</p>
      <ul>
        <li><Link to="/produits?tri=prix">Trier par prix</Link></li>
        <li><Link to="/produits?tri=prix-asc">Trier par prix croissant</Link></li>
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produits" element={<Catalogue />} />
    </Routes>
  )
}
