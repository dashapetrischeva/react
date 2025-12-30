import { memo } from 'react'
function DisplayList({ sortetList, options, onSelect }) {
	return (
		<div>
			<h1>{options.title}</h1>
			<div>
				{
					sortetList.map((el, i) => (
						<div key={i} onClick={onSelect}>{el}</div>
					))
				}

			</div></div>);
}

export default memo(DisplayList);