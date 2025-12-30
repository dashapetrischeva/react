import { useState, useMemo } from 'react'
import DisplayList from './DisplayList'
function SortetList({ items }) {
	const options = useMemo(() => ({
		title: 'My list',
	}), [])
	const sortetList = useMemo(() => {
		return [...items].sort((a, b) => a - b)
	}, [items])

	const onSelect = useCallback(
		() => console.log('hi'), []
	)
	const [count, setCount] = useState(0)
	return (
		<div>
			<div>
				{count}
			</div>
			<button onClick={() => setCount((p) => p + 1)}>Add</button>
			<DisplayList sortetList={sortetList} options={options} onSelect={onSelect} />
		</div>
	);
}

export default SortetList;