import { useId, useState, useMemo } from 'react'
import useDebounce from './useDebounce'
import styles from './DebouncedSearch.module.css'
function DebouncedSearch({ items }) {
	const id = useId()
	const [filterValue, setFilterValue] = useState('')
	function handleFilterInput(e) {
		setFilterValue(e.target.value)
	}
	const debouncedValue = useDebounce(filterValue, 500)
	const filteredItems = useMemo(() => {
		const filterLowerCase = debouncedValue.toLowerCase()
		return items.filter((el) => el.title.toLowerCase().includes(filterLowerCase))
	}, [items, debouncedValue])
	return (
		<div className={styles.debouncedSearch}>
			<h2>Debounced search</h2>
			<div className={styles.formField}>
				<label htmlFor={id} className={styles.fieldLabel}>Search</label>
				<input type="text" id={id} value={filterValue} onChange={handleFilterInput} className={styles.fieldInput} />
			</div>
			<div>
				<ul className={styles.list}>
					{

						filteredItems.map(product => (
							<li key={product.id} className={styles.item}>
								<img src={product.imgSrc}
									alt={product.title}
								/>
								<span>{product.title} - ${product.price}</span>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	);
}

export default DebouncedSearch;

