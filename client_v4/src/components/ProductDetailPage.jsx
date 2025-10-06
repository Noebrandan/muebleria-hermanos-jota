import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
export default function ProductDetailPage({ products, onAddToCart }){
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => String(p.id) === String(id))
  if(!product) return <h3>Producto no encontrado</h3>
  const img = product.imagen || product.imagenArchivo || ('/img/' + (product.imagenArchivo || 'Sofa_Patagonia.png'))
  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)} className="btn-back">Volver</button>
      <div className="detail-grid">
        <img src={img} alt={product.nombre} />
        <div>
          <h2>{product.nombre}</h2>
          <p>{product.descripcion}</p>
          <p className="price">${product.precio}</p>
          <h4>Detalles:</h4>
          <ul>
            {product.detalles && Object.entries(product.detalles).map(([k,v]) => <li key={k}><strong>{k}:</strong> {v}</li>)}
          </ul>
          <button onClick={() => onAddToCart(product)}>Añadir al Carrito</button>
        </div>
      </div>
    </div>
  )
}
