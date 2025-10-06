import React from 'react'
import ProductList from './ProductList'
export default function HomePage({ products, onSelect }){
  return (
    <section>
      <h2>Bienvenidos a Mueblería Hermanos Jota</h2>
      <ProductList products={products} onSelect={onSelect} />
    </section>
  )
}
