import styles from './DreamForm.module.css'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useTranslation } from 'react-i18next'

import Textarea from '@/shared/ui/Textarea'
import Input from '@/shared/ui/Input'
import { dreamSchema } from '@/features/dream/model/dreamSchema'

export default function DreamForm({ onSubmit, initialValues }) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(dreamSchema),
		defaultValues: initialValues
	})

	const isEditMode = Boolean(initialValues?.id)
	const { t } = useTranslation()

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
			autoComplete="off"
		>
			<Textarea
				{...register("description")}
				error={errors.description}
				label={t('form.description')}
			/>

			<Input
				{...register("year")}
				error={errors.year}
				label={t('form.year')}

			/>

			<Input
				{...register("friend")}
				label={t('form.friend')}
			/>

			<button
				className={styles.button}
				type="submit"
				disabled={isSubmitting}
			>
				{isSubmitting
					? isEditMode ? t('actions.editing') : t('actions.adding')
					: isEditMode ? t('actions.edit') : t('actions.add')}
			</button>
		</form>
	)
}