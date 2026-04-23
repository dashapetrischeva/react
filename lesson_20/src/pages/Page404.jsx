import { useTranslation } from 'react-i18next'

function Page404() {
	const { t } = useTranslation()

	return (
		<>
			<h1>404</h1>
			<div>{t('page404.notFound')}</div>
		</>
	)
}

export default Page404