import React from 'react'
import { Link } from 'react-router-dom'


export default () => {
  return (
    <div id="cart-empty">
      <h1>You Must Add a Bike To Your Cart to Checkout</h1>
      <p>Please add a bike products to your cart.</p>
      <Link className="custom-button" to="/bikes"><button>Bikes</button></Link>
    </div>
  )
}
