import * as yup from "yup"

const currentYear = new Date().getFullYear()

export const dreamSchema = yup.object({
	description: yup
		.string()
		.required('validation.descriptionRequired')
		.max(200, 'validation.descriptionMax'),

	year: yup
		.number()
		.transform((value, originalValue) =>
			originalValue === "" ? undefined : Number(originalValue)
		)
		.typeError('validation.yearType')
		.required('validation.yearRequired')
		.min(currentYear, 'validation.yearMin')
		.max(2050, 'validation.yearMax'),
})