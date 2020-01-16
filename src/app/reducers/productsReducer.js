import * as productData from '../../db/bikerentals'


//This function simulates an API call to a product database
function fetchProducts() {
  return new Promise(resolve => {
    resolve(productData.default.products);
  });
}

const GOT_PRODUCTS_FROM_DATABASE = 'GOT_PRODUCTS_FROM_DATABASE'

const gotProductsFromDatabase = (products) => {
  return { type: GOT_PRODUCTS_FROM_DATABASE, products }
}

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const data = await fetchProducts()
        dispatch(gotProductsFromDatabase(data))
      } catch (error) {
          console.error(error)
      }
  }
}

const productReducer = (products = [], action) => {
  switch (action.type) {
      case GOT_PRODUCTS_FROM_DATABASE:
          return [...action.products]
      default:
        return products
  }
}

export default productReducer
