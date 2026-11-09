import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

export default function App() {
  return (
    <>
      <nav className="page" style={{ paddingBottom: 0 }}>
        <Link to="/">CycloShop</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits/:slug" element={<Product />} />
      </Routes>
    </>
  )
}
