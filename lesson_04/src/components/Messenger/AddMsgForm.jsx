import { useState } from 'react'
import styles from './AddMsgForm.module.css'
function AddMsgForm({ onAdd }) {
	const [text, setText] = useState('')

	function handleChange(e) {
		setText(e.target.value)
	}

	function addMsg(e) {
		e.preventDefault()
		onAdd(text)
		setText('')
	}

	return (
		<form>
			<div className={styles.form__field}>
				<input type="text" className={styles.field__input} placeholder='Type a new message' value={text} onChange={handleChange} />	<button className={styles.button} onClick={addMsg}> Send </button>
			</div>

		</form>
	)
}

export default AddMsgForm;