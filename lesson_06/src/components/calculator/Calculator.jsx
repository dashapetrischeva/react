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
			<h2>Calculator</h2>
			<div className={styles.formField}>
				<label htmlFor={id1} className={styles.fieldLabel}>Number A</label>
				<input type="text" className={styles.fieldInput} id={id1} value={a} onChange={(e) => setA(Number(e.target.value))} />
			</div>
			<div className={styles.formField}>
				<label htmlFor={id2} className={styles.fieldLabel}>Number B</label>
				<input type="text" className={styles.fieldInput} id={id2} value={b} onChange={(e) => setB(Number(e.target.value))} />
			</div>
			<ResultDisplay result={result} />
			<button className={styles.button} onClick={() => setCount(prev => prev + 1)}>{count}</button>
		</div>
	);
}

export default Calculator;

