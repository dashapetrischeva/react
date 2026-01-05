import { Link } from "react-router";
import frontRoutes from "../../router/frontRoutes";
import styles from './ProductItem.module.css'
function ProductItem({ product }) {
	return (

		<div className={styles.productItem}>
			<div className={styles.itemImage}><img src={product.imageUrl} alt="product" /></div>
			<div>
				<Link to={frontRoutes.navigate.getProductDetail(product.id)} className={styles.itemLink}>	{product.name}</Link>
				<div className={styles.itemPrice}>{product.price} ₴</div>
			</div>
		</div >


	);
}

export default ProductItem;