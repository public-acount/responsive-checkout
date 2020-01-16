import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateCart } from '../reducers/cartReducer'
import CartEmpty from '../components/CartEmpty'
import '../../assets/css/cart.css'


class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: -1,
      cart: []
    }
  }

  componentDidMount() {
    const consolidatedCart = this.consolidateCart(this.props.cart)
    this.setState({ total: this.calculateTotal(consolidatedCart), cart: consolidatedCart })
  }

  componentDidUpdate() {
    this.props.updateCart(this.state.cart)
  }

  consolidateCart(cart) {
    const hashMap = {}
    for (let i = 0; i < cart.length; i++) {
      if (!hashMap[cart[i].id]) {
        hashMap[cart[i].id] = cart[i]
      } else {
        hashMap[cart[i].id].quantity = hashMap[cart[i].id].quantity + cart[i].quantity
      }
    }
    const consolidatedCart = Object.values(hashMap)
    return consolidatedCart
  }

  calculateTotal(cart) {
    return cart.reduce((accum, product) => {
        return accum + (product.price * product.quantity)
      }, 0)
  }

  clearCart() {
    this.setState({ total: 0, cart: [] })
  }

  updateQuantity() {
    const allQuantities = document.getElementsByTagName('input')
    const newCart = this.state.cart.slice()
    newCart.map((el, idx) => el.quantity = allQuantities[idx].value)
    const filteredCart = newCart.filter(el => el.quantity !== "0")
    this.setState({ total: this.calculateTotal(filteredCart), cart: filteredCart })
  }

  removeItem(id) {
    const newCart = this.state.cart.slice().filter(el => el.id !== id)
    this.setState({ total: this.calculateTotal(newCart), cart: newCart })
  }

  render() {
    if (this.state.total === 0) {
      return(
        <div id="cart">
          <CartEmpty />
        </div>
      )
    }
    return (
      <div id="cart">
        <h1>Shopping Cart</h1>
        <div className="cart-container">
            <table>
              <thead>
                <tr>
                  <td>Product:</td>
                  <td>Type:</td>
                  <td>Quantity:</td>
                  <td>Price:</td>
                  <td>Remove:</td>
                </tr>
              </thead>
              <tbody>
                {this.state.cart.map(product => (
                  <tr key={`a-${product.id}`}>
                    <td key={`b-${product.id}`}>{product.name}</td>
                    <td key={`c-${product.id}`}>{product.product_type}</td>
                    <td key={`d-${product.id}`}><input type="text" data-id={product.id} defaultValue={product.quantity} /></td>
                    <td key={`e-${product.id}`}>${(product.price * product.quantity).toFixed(2)}</td>
                    <td onClick={() => {this.removeItem(product.id)}} key={`f-${product.id}`}><img src="/images/delete-item.png" alt="remove-item" /></td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td>TOTAL:</td>
                  <td></td>
                  <td>${this.state.total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div className="cart-buttons">
          <button onClick={() => {this.updateQuantity()}}>Update Cart</button>
          <button onClick={() => {this.clearCart()}}>Clear Cart</button>
        </div>
        <Link className="custom-button" to="/checkout"><button>Checkout</button></Link>
      </div>
    )
  }
}

const mapState = (state) => { return { cart: state.cart } }
const mapDispatch = (dispatch) => {
  return {
    updateCart: (cart) => dispatch(updateCart(cart))
  }
}

export default connect(mapState, mapDispatch)(Cart)
