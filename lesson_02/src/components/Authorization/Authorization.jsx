import { useState } from 'react'
import styles from "./Authorization.module.css"

function Authorization() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [loginIsCorrect, setLoginIsCorrect] = useState('')
	const [classColor, setClassColor] = useState('')
	function onClickHandler(e) {



		const correctLogin = 'Dasha'
		const userLogin = login.trim()
		setLoginIsCorrect(false)
		setClassColor('')
		if (userLogin === correctLogin)
			setLoginIsCorrect(true)

		else if (userLogin === 'Ivan')
			setClassColor(styles.blue)
		else
			setClassColor(styles.red)
	}

	return (
		<div>
			<h2>Task 1</h2>
			<form action="#" method="GET" className={styles.form}>
				<div className={styles.form__field}>
					<label className={styles.field__label}>
						Login
						<input type="text"
							className={styles.field__input}
							value={login}
							onChange={(e) => setLogin(e.target.value)} />
					</label>
				</div>
				<div className={styles.form__field}>
					<label className={styles.field__label}>
						Password
						<input type="password"
							className={styles.field__input}
							value={password}
							onChange={(e) => setPassword(e.target.value)} />
					</label>
				</div>
				<div className={styles.form__buttons}>

					<button type="button" onClick={onClickHandler}>Go</button>
				</div>
			</form >

			<div className={styles.result}>
				{loginIsCorrect === true && (
					<img src="/smile.jpg" />
				)}
				{loginIsCorrect === false && (
					<div className={classColor}>Access denied!</div>
				)}
			</div>
		</div >
	);
}

export default Authorization;

