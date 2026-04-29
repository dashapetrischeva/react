import { useTranslation } from 'react-i18next'
import styles from './Textarea.module.css'
import { TextareaProps } from './Textarea.types'


export default function Textarea({ label, error, className, ...rest }: TextareaProps) {
	const { t } = useTranslation()

	return (
		<div>
			{label && <label className={styles.label}>{label}</label>}
			<textarea
				{...rest}
				className={`${styles.textarea}${className ? ` ${className}` : ''}`}
			/>
			{error?.message && <div className={styles.error}>{t(error.message)}</div>}
		</div>
	)
}
