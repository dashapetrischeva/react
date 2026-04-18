import * as yup from "yup"

export const loginSchema = yup.object({
	email: yup
		.string()
		.trim()
		.required('validation.emailRequired')
		.email('validation.emailInvalid'),

	password: yup
		.string()
		.required('validation.passwordRequired')
		.min(6, 'validation.passwordMin'),
})