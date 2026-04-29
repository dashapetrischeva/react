import styles from './Home.module.css'
import { useTranslation } from 'react-i18next'

function Home() {
	const { t } = useTranslation()
	return (
		<section className={styles.hero}>
			<h1 className={styles.title}>{t('home.title')}</h1>
			<p className={styles.subtitle}>
				{t('home.subtitle')}
			</p>

		</section>
	)
}

export default Home