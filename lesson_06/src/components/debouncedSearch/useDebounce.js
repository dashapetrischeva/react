// Задача 4. useDebounce – відкладений виклик функції
// Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах.
// Він повинен повертати "відкладене" значення, яке оновлюється лише після того, як минув заданий час без змін.
// Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу,
// а з невеликою затримкою (наприклад, 500мс) після зупинки введення, використовуючи useDebounce.
import { useEffect, useState } from 'react'

function useDebounce(value, delay) {

	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debouncedValue
}

export default useDebounce;