

export const selectFilteredProducts = state => {
	const { products, filter } = state.products
	const filterLowerCase = filter.toLowerCase()
	return products.filter(product =>
		product.title.toLowerCase().includes(filterLowerCase)
	)
}
