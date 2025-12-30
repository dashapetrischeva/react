import { useState } from 'react'
function useInput(initialValue = '') {
	const [value, setValue] = useState(initialValue)
	function handleChange(e) {
		setValue(e.target.value)
	}
	function clear() {
		setValue('')
	}
	return {
		inpProp: {
			value,
			onChange: handleChange,
		},
		clear,
	}
}
export default useInput