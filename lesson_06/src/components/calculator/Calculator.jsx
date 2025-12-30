import { useId, useMemo, useState } from 'react'
import ResultDisplay from './ResultDisplay'
import styles from './Calculator.module.css'
function Calculator() {
	const [a, setA] = useState(0)
	const [b, setB] = useState(0)
	const [count, setCount] = useState(0)
	const id1 = useId()
	const id2 = useId()
	const result = useMemo(() => {
		return a + b
	}, [a, b])
	return (
		<div>
			<h2>Калькулятор</h2>
			<div className={styles.formField}>
				<label htmlFor={id1} className={styles.fieldLabel}>Число А</label>
				<input type="text" className={styles.fieldInput} id={id1} value={a} onChange={(e) => setA(Number(e.target.value))} />
			</div>
			<div className={styles.formField}>
				<label htmlFor={id2} className={styles.fieldLabel}>Число В</label>
				<input type="text" className={styles.fieldInput} id={id2} value={b} onChange={(e) => setB(Number(e.target.value))} />
			</div>
			<ResultDisplay result={result} />
			<button className={styles.button} onClick={() => setCount(prev => prev + 1)}>{count}</button>
		</div>
	);
}

export default Calculator;

// Задача 1. Оптимізація вибіркового рендеру з useMemo та React.memo
// Створіть компонент-калькулятор, який має два незалежні поля вводу: одне для числа A і одне для числа B.
// Також є окремий компонент ResultDisplay, який відображає A + B. Обгорніть ResultDisplay у React.memo().
// Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay.
// Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B,
// а не коли змінюється інший незалежний стан у батьківському компоненті (наприклад, лічильник, що не впливає на A чи B).
