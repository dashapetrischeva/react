import { useState } from 'react'
import type {
	ItemFormValues,
	ItemFormErrors,
	UseItemFormProps,
} from './useItemForm.types'

export function useItemForm({
	initialValues = { description: '', year: '', friend: '' },
	onSubmit,
}: UseItemFormProps) {
	const [values, setValues] = useState < ItemFormValues > (() => ({
		...initialValues,
	}))

	const [errors, setErrors] = useState < ItemFormErrors > ({})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const validate = (vals: ItemFormValues): ItemFormErrors => {
		const errs: ItemFormErrors = {}

		if (!vals.description.trim()) {
			errs.description = 'Enter a description'
		}

		if (!vals.year.trim()) {
			errs.year = 'Enter a year'
		}

		return errs
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target

		setValues((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const validationErrors = validate(values)
		setErrors(validationErrors)

		if (Object.keys(validationErrors).length === 0) {
			setIsSubmitting(true)

			try {
				await onSubmit(values)
				setValues({ ...initialValues })
			} finally {
				setIsSubmitting(false)
			}
		}
	}

	return {
		values,
		errors,
		isSubmitting,
		handleChange,
		handleSubmit,
		setValues,
		setErrors,
	}
}