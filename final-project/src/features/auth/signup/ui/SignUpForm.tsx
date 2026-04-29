import { useState } from 'react'
import { useSignUp } from '../model/useSignUp'
import { useNavigate } from 'react-router'
import styles from './SignUpForm.module.css'
import { useTranslation } from 'react-i18next'
import { useForm, type Resolver, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../model/registerSchema'
import type { RegisterFormValues } from '../model/registerSchema.types'

import Input from '@/shared/ui/Input'
import { SignUpFormProps } from './SignUpForm.types'

export default function SignUpForm({ onSuccess }: SignUpFormProps) {
	const { signUp, isLoading, error } = useSignUp()
	const [errorMessage, setErrorMessage] = useState('')
	const navigate = useNavigate()
	const { t } = useTranslation()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<RegisterFormValues>({
		mode: 'onBlur',
		resolver: yupResolver(registerSchema) as unknown as Resolver<RegisterFormValues>,
	})

	const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
		setErrorMessage('')
		try {
			await signUp(data)

			onSuccess?.()
			navigate('/')
		} catch (err) {
			setErrorMessage((err as Error)?.message || t('signupForm.signupError'))
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.signUpForm}>
			<Input
				placeholder={t('signUpForm.namePlaceholder')}
				{...register('displayName')}
				error={errors.displayName}
			/>

			<Input
				type='email'
				placeholder={t('signUpForm.emailPlaceholder')}
				{...register('email')}
				error={errors.email}
			/>

			<Input
				type='password'
				placeholder={t('signUpForm.passwordPlaceholder')}
				{...register('password')}
				error={errors.password}
			/>

			<button
				type='submit'
				disabled={isSubmitting || isLoading}
				className={styles.submitButton}
			>
				{t('signUpForm.submitButton')}
			</button>

			{(error || errorMessage) && (
				<div className={styles.error}>
					{errorMessage || error?.data?.message || t('signUpForm.signupError')}
				</div>
			)}
		</form>
	)
}
