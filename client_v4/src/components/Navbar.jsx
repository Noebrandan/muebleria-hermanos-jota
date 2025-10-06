import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar({ cartCount }){
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/"><img src="/img/logo.svg" alt="logo" style={{height:40}} /></Link>
        <Link to="/"><h1>Mueblería Hermanos Jota</h1></Link>
      </div>
      <div className="nav-links">
        <Link to="/productos">Productos</Link> | <Link to="/contacto">Contacto</Link>
      </div>
      <div className="cart">🛒 <Link to="/">{cartCount}</Link></div>
    </nav>
  )
}
