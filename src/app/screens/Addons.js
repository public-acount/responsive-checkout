import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../reducers/productsReducer'
import { addProductToCart } from '../reducers/cartReducer'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import '../../assets/css/products.css'


class Addons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      addons: [],
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })
    await this.props.getProducts()
    this.setState({ loading: false })
    this.sortProducts()
  }

  sortProducts() {
    const allProducts = this.props.products.slice()
    const addons = allProducts.filter(product => { return product.product_type === 'addon'})
    this.setState({ addons })
  }

  addToCart(product) {
    const quantity = parseInt(document.getElementById(product.id).value)
    const productWithQuantity = {...product, quantity}
    const totalPrice = product.price * quantity
    this.props.addProductToCart(productWithQuantity, quantity)
    alert(`${product.name} has been added to you cart for $${totalPrice.toFixed(2)} ($${product.price.toFixed(2)} x ${quantity}).`)
  }

  render() {
    if (this.state.loading === true) {
      return (
        <Loading />
      )
    }
    return (
      <div id="products">
        <h1>Addons</h1>
        <div className="products-container">
          {this.state.addons.map(product => (
            <div key={`a-${product.id}`} className="single-product">
              <div key={`b-${product.id}`} className="single-product-box">
                <p key={`c-${product.id}`}>{product.name}</p>
                <img key={`d-${product.id}`} alt={product.name} src={product.image} />
                <p key={`e-${product.id}`}>${product.price.toFixed(2)}</p>
              </div>
              <div className="quantity-select">
                <p>Quantity:</p>
                <select id={product.id}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <input type="submit" key={`f-${product.id}`} onClick={() => {this.addToCart(product)}} value="Add to Cart" />
            </div>
          ))}
        </div>
        <Link className="custom-button" to="/cart"><button>View Cart</button></Link>
      </div>
    )
  }
}

const mapState = (state) => { return { products: state.products } }
const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    addProductToCart: (product) => dispatch(addProductToCart(product))
  }
}

export default connect(mapState, mapDispatch)(Addons)
