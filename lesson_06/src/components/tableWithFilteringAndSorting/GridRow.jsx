import { memo } from 'react'
import styles from './GridRow.module.css'
function GridRow({ product }) {
	return (
		<li key={product.id} className={styles.item}>
			<img src={product.imageUrl} alt={product.name} width="50" />
			<span className={styles.itemName}>{product.name}</span> <span> ${product.price}</span>
		</li>
	);
}

export default memo(GridRow);