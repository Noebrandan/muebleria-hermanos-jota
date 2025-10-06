import React from 'react'
import ProductList from './ProductList'
export default function ProductosPage({ products, onSelect }){
  return (
    <section>
      <h2>Productos</h2>
      <ProductList products={products} onSelect={onSelect} />
    </section>
  )
}
