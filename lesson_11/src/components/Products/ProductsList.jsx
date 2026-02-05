import ProductCard from "./ProductCard";
import styles from './ProductsList.module.css'
function ProductsList({ products }) {
	return (
		<>

			<div className={styles.list}>
				{products.map((product) => <ProductCard key={product.id} product={product} />)}
			</div>
		</>
	);
}

export default ProductsList;