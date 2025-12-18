import { useState } from 'react'
import styles from './Player.module.css';

function Player({ playerId, currentPlayer, handleGuess, guessedNumbers, usedNumbers }) {
	const [userNumber, setUserNumber] = useState('')
	const isMyTurn = currentPlayer === playerId;
	const isUsed = usedNumbers.includes(Number(userNumber));


	function onClickHandler() {
		const number = Number(userNumber);


		if (isNaN(number) || number < 1 || number > 9) {
			alert("Please enter a valid number between 1 and 9.");
			setUserNumber("");
			return;
		}

		handleGuess(number);
		setUserNumber("");
	}

	return (
		<div
			className={styles.player}
		>
			<h2>Player {playerId}</h2>
			<form>

				<div className={styles.form__field}>

					<input type="number"
						className={styles.field__input}
						value={userNumber}
						placeholder='Type a number'
						onChange={(e) => setUserNumber(e.target.value)}
						disabled={!isMyTurn}
					/>

				</div>
				<div className={styles.form__buttons}>
					<button type="button" onClick={onClickHandler} disabled={!isMyTurn || isUsed}>Make a move</button>
				</div>
				<div className={styles.guessedNumbers}>
					Guessed numbers: <span> {guessedNumbers.length === 0 ? "none" : guessedNumbers.join(", ")}</span>
				</div>
			</form>
		</div>
	);
}

export default Player;




