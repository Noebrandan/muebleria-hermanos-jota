import React from 'react'
export default function ProductCard({ product, onClick }){
  const img = product.imagen || product.imagenArchivo || ('/img/' + (product.imagenArchivo || 'Sofa_Patagonia.png'))
  return (
    <article className="product-card" onClick={onClick} role="button" tabIndex={0}>
      <img src={img} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p className="price">${product.precio}</p>
    </article>
  )
}
