import * as yup from "yup"

export const registerSchema = yup.object({
	displayName: yup
		.string()
		.trim()
		.required('validation.nameRequired')
		.min(2, 'validation.nameMin'),

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