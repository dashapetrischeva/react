import { useState } from 'react'
import styles from './SimpleSaper.module.css'
function SimpleSaperReact({ initGameField }) {
	const [gameField, setGameField] = useState(() => JSON.parse(JSON.stringify(initGameField)));
	const [history, setHistory] = useState([]);
	const hasHistory = history.length > 0
	function getCurrentClass(index) {
		if (gameField[index].isOpen) {
			if (gameField[index].hasMine) return styles['has-mine-state'];
			else return styles['no-mine-state'];
		}
		else return styles.cell;

	}
	function onCellClick(cellId) {
		setHistory((prevHistory) => [...prevHistory, JSON.parse(JSON.stringify(gameField))]);
		setGameField((prevGameField) =>
			prevGameField.map((cell) =>
				cell.id === cellId ? { ...cell, isOpen: true } : cell
			)
		);
	}
	function onRevert() {
		const lastGameField = history.at(-1);
		if (lastGameField) {
			setGameField(lastGameField);
			setHistory((prevHistory) => prevHistory.slice(0, -1));
		}
	}
	return (
		<>
			<h1>Saper</h1>
			<table>
				<tbody>
					<tr>
						{
							gameField.map((cell, index) => (
								<td
									key={cell.id}
									className={getCurrentClass(index)}
									onClick={() => onCellClick(cell.id)}>
								</td>
							))
						}
					</tr>
				</tbody>
			</table >
			<hr />
			{hasHistory && <button onClick={onRevert}>Back</button>}
		</>
	);
}

export default SimpleSaperReact;