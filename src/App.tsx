import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produits/:slug" element={<Product />} />
    </Routes>
  )
}
