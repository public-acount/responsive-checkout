import React from 'react'
import { Link } from 'react-router-dom'


export default () => {
  return (
    <div id="cart-empty">
      <h1>Your Shopping Cart is Empty</h1>
      <p>Please add some products to your cart.</p>
      <Link className="custom-button" to="/products"><button>Products</button></Link>
    </div>
  )
}
