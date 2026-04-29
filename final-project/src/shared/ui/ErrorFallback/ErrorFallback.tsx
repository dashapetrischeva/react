import { useTranslation } from 'react-i18next'
import type { ErrorFallbackProps } from './ErrorFallback.types'
import styles from './ErrorFallback.module.css'

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
	const { t } = useTranslation()

	console.error('ErrorBoundary:', error)

	return (
		<div className={styles.errorFallback} role="alert">
			<div className={styles.errorIcon}>
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 9V11M12 15H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>

			<h2 className={styles.errorTitle}>
				{t('errorBoundary.title')}
			</h2>

			<button
				className={styles.retryButton}
				onClick={resetErrorBoundary}
			>
				{t('errorBoundary.tryAgain')}
			</button>
		</div>
	)
}

export default ErrorFallback