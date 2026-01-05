import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import apiRoutes from "../../api/apiRoutes";
import Loader from "../../components/Loader";
import styles from './ProductDetail.module.css'
function ProductDetail() {
	const { id } = useParams()
	const { data: product, isLoading, error } = useFetch(apiRoutes.getProductById(id))
	return (
		<div>
			{!!isLoading && <Loader />}
			{!!error && <div>Error!</div>}
			{
				!!product && (<div className={styles.productDetail}>
					<div className={styles.detailImage}><img src={product.imageUrl} alt="product" /></div>
					<div className={styles.detailInfo}>
						<h1>{product.name}</h1>
						<div className={styles.detailPrice}>Ціна: {product.price}</div>
					</div>

				</div>
				)}

		</div>
	);
}

export default ProductDetail;