import styles from './DreamForm.module.css'
import { useForm, type Resolver } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'

import Textarea from '@/shared/ui/Textarea'
import Input from '@/shared/ui/Input'
import { dreamSchema } from '@/features/dream/model/dreamSchema'
import type { DreamFormValues } from '@/features/dream/model/dreamSchema.types'
import type { DreamFormProps } from './DreamForm.types'

export default function DreamForm({
	onSubmit,
	initialValues,
}: DreamFormProps) {
	const { id, ...defaultValues } = initialValues ?? {}

	const resolver = yupResolver(dreamSchema) as Resolver<DreamFormValues, any>

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<DreamFormValues>({
		mode: 'onBlur',
		resolver,
		defaultValues,
	})

	const isEditMode = Boolean(id)
	const { t } = useTranslation()

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
			autoComplete="off"
		>
			<Textarea
				{...register('description')}
				error={errors.description}
				label={t('form.description')}
			/>

			<Input
				{...register('year')}
				error={errors.year}
				label={t('form.year')}
			/>

			<Input
				{...register('friend')}
				label={t('form.friend')}
			/>

			<button
				className={styles.button}
				type="submit"
				disabled={isSubmitting}
			>
				{isSubmitting
					? isEditMode
						? t('actions.editing')
						: t('actions.adding')
					: isEditMode
						? t('actions.edit')
						: t('actions.add')}
			</button>
		</form>
	)
}