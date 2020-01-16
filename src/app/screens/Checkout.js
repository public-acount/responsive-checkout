import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateCart } from '../reducers/cartReducer'
import NoBikeInCart from '../components/NoBikeInCart'
import '../../assets/css/checkout.css'
import '../../assets/css/cart-empty.css'

class Checkout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: -1,
      cart: [],
      hasBike: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({ total: this.calculateTotal(), cart: this.props.cart, hasBike: this.checkCartForBike() })
  }

  checkCartForBike() {
    for (let i=0; i < this.props.cart.length; i++) {
      if (this.props.cart[i].product_type === "bike") {
        return true
      }
    }
    return false
  }

  calculateTotal() {
    return this.props.cart.reduce((accum, product) => {
        return accum + (product.price * product.quantity)
      }, 0)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateCart([])
    alert(
      'Thank you for your order!\n\nAt this point in the process we would make a post/put request to our database to update all the necessary tables and send data to our email service/API for confirmation email generation'
    )
    window.location.href = '/#/thank-you'
  }

  render() {
    if (!this.state.hasBike) {
      return(
        <div id="checkout">
          <NoBikeInCart />
        </div>
      )
    }
    return (
      <div id="checkout">
        <h1>Checkout</h1>
        <div className="checkout-container">
          <form onSubmit={this.handleSubmit}>
            <h3>Name</h3>
            <label>
              <input id="first_name" type="text" placeholder="First Name" />
            </label>
            <label>
              <input id="last_name" type="text" placeholder="First Name" />
            </label>
            <h3>Email Address</h3>
            <label>
              <input id="email_address" type="text" placeholder="Email Address" />
            </label>
            <h3>Phone Number</h3>
            <label>
              <input id="phone_number" type="text" placeholder="Phone Number" />
            </label>
            <h3>Shipping/Billing Address</h3>
            <label>
              <input id="street_address_1" type="text" placeholder="Street Address 1" />
            </label>
            <label>
              <input id="street_address_2" type="text" placeholder="Street Address 2" />
            </label>
            <label>
              <input id="city" type="text" placeholder="City" />
            </label>
            <label>
              <input id="state" type="text" placeholder="State" />
            </label>
            <label>
              <input id="zip_code" type="text" placeholder="Zip Code" />
            </label>
            <h3>Credit Card</h3>
            <label>
              <input id="credit_card_number" type="text" placeholder="Credit Card Number" />
            </label>
            <label>Exp Date:&nbsp;
              <input id="exp_date" type="date" placeholder="Exp Date" />
            </label>
            <label>
              <input id="cvv" type="text" placeholder="CVV" />
            </label>
            <table>
              <tbody>
                <tr>
                  <td>TOTAL:</td>
                  <td>${this.state.total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <div className="checkout-buttons">
              <Link className="custom-button" to="/cart"><button>Go Back to Cart</button></Link>
              <input type="submit" className="input-submit-button" value="Complete Purchase" />
            </div>
          </form>
        </div>
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

export default connect(mapState, mapDispatch)(Checkout)
