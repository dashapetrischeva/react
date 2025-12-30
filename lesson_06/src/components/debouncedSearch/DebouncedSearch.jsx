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
				<label htmlFor={id} className={styles.fieldLabel}>Пошук</label>
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

// {
//     id: 1,
//     title: 'Ноутбук ASUS TUF Gaming A15 (2023)',
//     imgSrc:
//       'https://content.rozetka.com.ua/goods/images/original/349586929.jpg',
//     discount: 8000,
//     oldPrice: 59999,
//     price: 51999,
//     link: 'https://rozetka.com.ua/ua/asus-90nr0e88-m004h0/p386766864/?xnpe_tifc=OfnDx.Vd4IEshIod4kHZb9pZhfEWVjQsVuU_O.YD4.bpxFo74jX8hFE.4kxZhFVdxIhu4ueL&utm_source=dm&utm_campaign=goodspromo&utm_medium=email&xnpe_cmp=.eJwTUqgR-LfxDuexFM741z-nNP-se3gzVHky5yuvrCgec94j99YYXr8519PY56ZjVAOjvn5SfkqlfkliUk6qfkmRfkmKfnJqXklqEYoQjB1tGIvMRZEyR5PKQGZHG8WiG1JckJinn5jFE8WsUujpeSZtqsOhgwBfmUjy.qdmatQgmmIGl4g',
//   },