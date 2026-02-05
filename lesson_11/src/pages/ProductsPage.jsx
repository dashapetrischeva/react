import Filter from "@/components/Products/Filter";
import ProductsList from "@/components/Products/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from '@/store/slices/products/productsSlice'
function ProductsPage() {
	const dispatch = useDispatch()
	const { products, filter } = useSelector(state => state.products)


	const filteredProducts = products.filter(product =>
		product.title.toLowerCase().includes(filter.toLowerCase())
	)
	return (
		<div>
			<h1>Products List</h1>
			<Filter filter={filter} onChange={value => dispatch(filterProducts(value))} />
			{!!products && <ProductsList products={filteredProducts} />}

		</div>
	);
}

export default ProductsPage;