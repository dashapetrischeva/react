import { useTranslation } from 'react-i18next'

function ErrorFallback({ error, resetErrorBoundary }) {
	const { t } = useTranslation()

	return (
		<div role="alert">
			<p>{t('errorBoundary.title')}</p>
			<pre>{error?.message}</pre>
			<button onClick={resetErrorBoundary}>
				{t('errorBoundary.tryAgain')}
			</button>
		</div>
	)
}

export default ErrorFallback