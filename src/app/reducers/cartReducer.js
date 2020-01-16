const ADDED_PRODUCT_TO_CART = 'ADDED_PRODUCT_TO_CART'
const UPDATED_CART = 'UPDATED_CART'

const addedProductToCart = (product) => {
  return { type: ADDED_PRODUCT_TO_CART, product }
}

const updatedCart = (cart) => {
  return { type: UPDATED_CART, cart }
}

export const addProductToCart = (product) => {
  return async (dispatch) => {
    dispatch(addedProductToCart(product))
  }
}

export const updateCart = (cart) => {
  return async (dispatch) => {
    dispatch(updatedCart(cart))
  }
}

const cartReducer = (cart = [], action) => {
  switch (action.type) {
    case ADDED_PRODUCT_TO_CART:
      return [...cart, action.product]
    case UPDATED_CART:
      return action.cart
    default:
      return cart
  }
}

export default cartReducer
