const backendUrl = 'https://backend7-2-i3cd.onrender.com/api'

export default {
  productsList: `${backendUrl}/products`,
  getProductById: (id) => `${backendUrl}/products/${id}`,

}
