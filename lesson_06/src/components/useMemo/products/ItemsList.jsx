import { memo } from 'react'
function ItemsList({ items }) {
	return (
		<div>
			{
				items.map((item, index) => (
					<div key={index}>{item}</div>
				))
			}
		</div>
	);
}

export default memo(ItemsList);