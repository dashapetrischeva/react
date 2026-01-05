import useFetch from "../../hooks/useFetch";
import apiRoutes from '../../api/apiRoutes'
import Loader from "../../components/Loader";
import ProductItem from "./ProductItem";
import { Link, useNavigate } from "react-router";
import frontRoutes from "../../router/frontRoutes";
import styles from './Shop.module.css'
function Shop() {
	const { data: products, isLoading, error } = useFetch(apiRoutes.productsList)

	return (
		<div>

			{!!isLoading && <Loader />}
			{!!error && <div>Error!</div>}
			{!!products && (
				<div>

					<div className={styles.productsList}>
						{products.map(prod => (
							<ProductItem key={prod.id} product={prod} />
						))}
					</div>
					<Link to={frontRoutes.navigate.home} className={styles.home}>	На головну</Link>
				</div>
			)}
		</div>
	);
}

export default Shop;