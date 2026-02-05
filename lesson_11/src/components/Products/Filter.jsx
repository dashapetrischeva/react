import { useId } from "react";
import styles from './Filter.module.css'
function Filter({ filter, onChange }) {
	const filterId = useId()
	return (
		<div className={styles.fieldInput}>
			<input
				type="text"
				name="title"
				id={filterId}
				value={filter}
				placeholder='Search products'
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
}

export default Filter;