import { useId } from 'react'
import useInput from './useInput'
function TestForm() {
	const emailId = useId()
	const passwordId = useId()
	const emailInput = useInput()
	const passwordInput = useInput()
	function handleSubmit(e) {
		e.preventDefault()
		console.log(`email:${emailInput.inpProp.value}`)
		console.log(`password:${passwordInput.inpProp.value}`)
		emailInput.clear()
		passwordInput.clear()
	}
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor={emailId}>Email</label>
				<input type="email" id={emailId} {...emailInput.inpProp} />
			</div>
			<div>
				<label htmlFor={passwordId}>Password</label>
				<input type="password" id={passwordId} {...passwordInput.inpProp} />
			</div>
			<button>Send</button>
		</form>
	);
}

export default TestForm;