import React from 'react'
import ProductCard from './ProductCard'
export default function ProductList({ products, onSelect }){
  if(!products || products.length === 0) return <p>No hay productos.</p>
  return <section className="product-list">{products.map(p => <ProductCard key={p.id} product={p} onClick={() => onSelect(p)} />)}</section>
}
