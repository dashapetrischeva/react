const backendUrl = 'http://localhost:5000/api'

export default {
  productsList: `${backendUrl}/products`,
  getProductById: (id) => `${backendUrl}/products/${id}`,

}
