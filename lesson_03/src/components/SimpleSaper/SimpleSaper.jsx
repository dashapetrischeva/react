import { useState } from 'react';
import styles from './SimpleSaper.module.css'
function SimpleSaper({ gameField }) {
	function handleCellClick(event) {
		const tdEl = event.target;
		if (tdEl.tagName === 'TD') {
			const isMine = tdEl.getAttribute('mine');
			if (isMine === '1') {
				tdEl.style.backgroundColor = 'red';
				alert('Game Over! You clicked on a mine.');
			} else {
				tdEl.style.backgroundColor = 'green';
			}
		}
	}
	return (
		<>
			<h1>Saper</h1>
			<table>
				<tbody>
					<tr onClick={handleCellClick}>
						{
							gameField.map((cell) => (
								<td key={cell.id} mine={cell.hasMine} className={styles.cell}></td>
							))
						}
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default SimpleSaper;