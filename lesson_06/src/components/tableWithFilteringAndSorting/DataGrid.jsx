
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
			<h2>Table with filtering by name and sorting by price</h2>
			<div className={styles.formField}>
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Enter product name"
					className={styles.fieldInput}
				/>
				<button className={styles.button} onClick={handleUp}><img src="./up.png" alt="" /></button>
				<button className={styles.button} onClick={handleDown}><img src="./down.png" alt="" /></button>
			</div>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<ul className={styles.list}>
					{visibleProducts.length ? (
						visibleProducts.map((product) => (
							<GridRow key={product.id} product={product} />
						))
					) : (
						<p>No results found</p>
					)}
				</ul>
			)}
		</div>
	)
}

export default DataGrid;