// Відфільтрувати список товарів за назвою. Список товарів - масив обєктів з полями name, category

import { useId, useState, useMemo } from 'react'
import ItemsList from './ItemsList'
function FilterableList({ items }) {
	const id = useId()
	const [filterValue, setFilterValue] = useState('')
	function handleFilterInput(e) {
		setFilterValue(e.target.value)
	}
	const filteredItems = useMemo(() => {
		const filterLowerCase = filterValue.toLowerCase()
		return items.filter((el) => el.toLowerCase().includes(filterLowerCase))
	}, [items, filterValue])
	return (
		<div>
			<div>
				<label htmlFor={id}>Filter</label>
				<input type="text" id={id} value={filterValue} onChange={handleFilterInput} />
			</div>
			<hr />
			<ItemsList items={filteredItems} />
		</div>
	);
}

export default FilterableList;