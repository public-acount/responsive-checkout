import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/header.css'


export default () => {
  return (
    <div className="nav-items">
      <div className="nav-left">
        <Link to="/"><img width="60px" alt="logo" src="/images/logo.png" /></Link>
      </div>
      <div className="nav-right">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/products">All Products</Link>
        <Link className="nav-link" to="/bikes">Bikes</Link>
        <Link className="nav-link" to="/accessories">Accessories</Link>
        <Link className="nav-link" to="/addons">Addons</Link>
        <Link className="nav-link" to="/cart">Cart</Link>
      </div>
    </div>
  )
}
