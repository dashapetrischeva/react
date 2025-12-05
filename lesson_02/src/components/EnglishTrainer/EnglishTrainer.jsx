import { useState } from 'react'
import styles from "./EnglishTrainer.module.css"

function EnglishTrainer() {

	const [translation, setTranslation] = useState('')
	const [classColor, setClassColor] = useState('')
	const [isCorrect, setIsCorrect] = useState('')
	function onClickHandler(e) {
		const word = 'стіл'
		const userTranslation = translation.trim().toLowerCase()
		setIsCorrect(null)
		setClassColor('')
		if (userTranslation === word) {
			setIsCorrect(true)
			setClassColor(styles.green)
		}
		else if (userTranslation !== '') {
			setClassColor(styles.red)
			setIsCorrect(false)
		}
	}

	return (
		<div>
			<h2>Задача 3</h2>
			<form action="#" method="GET" className={styles.form}>
				<div className={classColor}><img src="../src/assets/table.jpg" alt="Image" /></div>
				<div className={styles.title}>Table</div>
				<div className={styles.form__field}>
					<label className={styles.field__label}>
						Ваш переклад
						<input type="text"
							className={styles.field__input}
							value={translation}
							onChange={(e) => setTranslation(e.target.value)} />
					</label>
				</div>

				<div className={styles.form__buttons}>
					<button type="button" onClick={onClickHandler}>Перевірити</button>
				</div>


				<div className={styles.result}>
					{isCorrect === true && <div>Добре. Молодець!</div>}
					{isCorrect === false && <div>Невірно, спробуйте ще раз</div>}
				</div>
			</form >
		</div >
	);
}

export default EnglishTrainer;

// Задача 3. Елемент тренажера англійської.Виводимо зображення елемента і слово.Користувач вводить відповідь.
// Якщо вірно – відтворюємо фразу «Добре.Молодець!» (і додаємо зелену рамку до елемента),
// якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).