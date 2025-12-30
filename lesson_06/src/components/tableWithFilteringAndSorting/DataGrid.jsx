// Задача 2. Таблиця з фільтрацією та сортуванням, чутлива до UI 
// Створіть компонент DataGrid (батьківський) та GridRow (дочірній).
// DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками.
// GridRow (обгорнутий у React.memo) відображає один рядок даних.
// Використайте useDeferredValue для пошукового запиту та/або параметрів сортування.
// Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі відкладених значень.
// Використайте useCallback для функцій-обробників сортування та інших інтерактивних елементів, які передаються до дочірніх компонентів.
// Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.
import { useState, useDeferredValue, useEffect, useRef, useCallback, useMemo } from 'react'
import GridRow from './GridRow'
import styles from './DataGrid.module.css'
function DataGrid() {
	const [query, setQuery] = useState('')
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const deferredQuery = useDeferredValue(query)
	const abortControllerRef = useRef(null)

	useEffect(() => {


		// Скасовуємо попередній запит
		if (abortControllerRef.current) {
			abortControllerRef.current.abort()
		}
		abortControllerRef.current = new AbortController()

		const fetchProducts = async () => {
			setIsLoading(true)
			try {
				const response = await fetch(

					`https://products-backend-sk6o.onrender.com/api/products/search?q=${encodeURIComponent(
						deferredQuery
					)}`,
					{ signal: abortControllerRef.current.signal }
				)
				const data = await response.json()
				setProducts(data)
			} catch (error) {
				console.error('Search error:', error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchProducts()
	}, [deferredQuery])
	const handleUp = useCallback(() => {
		setProducts(prev =>
			[...prev].sort((a, b) => a.price - b.price)
		)
	}, [])

	const handleDown = useCallback(() => {
		setProducts(prev =>
			[...prev].sort((a, b) => b.price - a.price)
		)
	}, [])
	const visibleProducts = useMemo(() => {
		return products
	}, [products])

	return (
		<div>
			<h2>Таблиця з фільтрацією за ім'ям та сортуванням по ціні</h2>
			<div className={styles.formField}>
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Введіть назву товару"
					className={styles.fieldInput}
				/>
				<button className={styles.button} onClick={handleUp}><img src="./up.png" alt="" /></button>
				<button className={styles.button} onClick={handleDown}><img src="./down.png" alt="" /></button>
			</div>
			{isLoading ? (
				<p>Завантаження...</p>
			) : (
				<ul className={styles.list}>
					{visibleProducts.length ? (
						visibleProducts.map((product) => (
							<GridRow key={product.id} product={product} />
						))
					) : (
						<p>Немає результатів</p>
					)}
				</ul>
			)}
		</div>
	)
}

export default DataGrid;