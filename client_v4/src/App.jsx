import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ProductosPage from './components/ProductosPage'
import ProductDetailPage from './components/ProductDetailPage'
import ContactPage from './components/ContactPage'
import fallback from './data/fallbackProducts.json'

export default function App(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    fetch('/api/productos').then(res => {
      if(!res.ok) throw new Error('no ok')
      return res.json()
    }).then(data => setProducts(data))
    .catch(err => {
      console.warn('Falling back to local products:', err.message)
      setProducts(fallback)
    }).finally(() => setLoading(false))
  }, [])

  const addToCart = (product) => setCart(prev => [...prev, product])

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <main className="container">
        {loading && <p>Cargando...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && (
          <Routes>
            <Route path="/" element={<HomePage products={products} onSelect={(p)=> navigate('/producto/'+p.id)} />} />
            <Route path="/productos" element={<ProductosPage products={products} onSelect={(p)=> navigate('/producto/'+p.id)} />} />
            <Route path="/producto/:id" element={<ProductDetailPage products={products} onAddToCart={addToCart} />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  )
}
