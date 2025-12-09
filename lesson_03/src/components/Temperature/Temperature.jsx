import { useState, useRef } from "react";
import styles from './Temperature.module.css'
function Temperature() {
	const [temperature, setTemperature] = useState('')
	const numericTemp = Number(temperature)
	let bgColor
	if (temperature !== '') {
		if (numericTemp < 0) bgColor = styles.white
		else if (numericTemp <= 10) bgColor = styles.blue
		else if (numericTemp <= 22) bgColor = styles.green
		else bgColor = styles.red
	}
	return (
		<section className={bgColor}>
			<h2>Задача 2</h2>
			<div className={styles.form__field}>
				<label className={styles.field__label}>
					Введіть температуру:</label>
				<input type="number" className={styles.field__input} value={temperature} onChange={(e) => setTemperature(e.target.value)} />

			</div>
		</section>
	)
}

export default Temperature;

