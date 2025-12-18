import { useState } from 'react'
import Player from './Player';
import RandomNumber from './RandomNumber';
import styles from './GuessNumber.module.css'
function GuessNumber() {
	const [gameOver, setGameOver] = useState(false);
	const MIN = 1
	const MAX = 9
	const [randomNumbers, setRandomNumbers] = useState(() =>
		Array.from({ length: 3 }, () => Math.floor(Math.random() * (MAX - MIN + 1)) + MIN)
	)
	const [currentPlayer, setCurrentPlayer] = useState(1)
	const [usedNumbers, setUsedNumbers] = useState([])
	const [player1GuessedNumbers, setPlayer1GuessedNumbers] = useState([])
	const [player2GuessedNumbers, setPlayer2GuessedNumbers] = useState([])

	const [guessed, setGuessed] = useState([null, null, null])


	function handleGuess(number) {
		if (gameOver) return;
		number = Number(number);


		if (usedNumbers.includes(number)) {
			return;
		}

		setUsedNumbers((prev) => [...prev, number]);
		const isCorrect = randomNumbers.includes(number);
		if (isCorrect) {
			setGuessed((prev) => {
				const newGuessed = [...prev];
				randomNumbers.forEach((num, index) => {
					if (num === Number(number)) {
						newGuessed[index] = num;
					}
				});

				if (!newGuessed.includes(null)) {

					if (currentPlayer === 1) {
						alert("Player 1 guessed the last number, so he lost!");
					} else {
						alert("Player 2 guessed the last number, so he lost!");
					}
					setGameOver(true);
				}
				return newGuessed;
			});
			if (currentPlayer === 1) {
				setPlayer1GuessedNumbers((prev) => [...prev, Number(number)])
			} else {
				setPlayer2GuessedNumbers((prev) => [...prev, Number(number)]);
			}
		}
		setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
	}
	return (
		<>
			<div className={styles.guessNumber__container}>
				<h1>Guess the number</h1>
				<RandomNumber guessed={guessed} />
				<div className={styles.players__container}>
					<Player playerId={1} currentPlayer={currentPlayer} handleGuess={handleGuess} guessedNumbers={player1GuessedNumbers} usedNumbers={usedNumbers} gameOver={gameOver} />
					<Player playerId={2} currentPlayer={currentPlayer} handleGuess={handleGuess} guessedNumbers={player2GuessedNumbers} usedNumbers={usedNumbers} gameOver={gameOver} />



				</div>
			</div>
		</>
	);
}

export default GuessNumber;