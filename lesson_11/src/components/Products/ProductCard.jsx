import styles from './ProductCard.module.css'
function ProductCard({ product }) {

	return (
		<div className={styles.itemCard}>
			<div className={styles.imageWrap}>
				<img src={product.imgSrc} alt={product.title} className={styles.image} />
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>{product.title}</h3>
				<p className={styles.price}>{product.price} $</p>
			</div>
		</div>
	);

}

export default ProductCard;