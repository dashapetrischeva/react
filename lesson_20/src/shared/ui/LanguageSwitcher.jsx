import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.css'

export default function LanguageSwitcher() {
	const { i18n } = useTranslation()
	const lang = i18n.language || 'en'
	const handleChangeLang = (e) => {
		//-----змінюємо мову
		i18n.changeLanguage(e.target.value)
		//-----зберігаємо вибрану мову у localStorage
		localStorage.setItem('i18nextLng', e.target.value)
	}
	return (
		<select className={styles.select} value={lang} onChange={handleChangeLang}>
			<option value="en">EN</option>
			<option value="ua">UA</option>
		</select>
	)
}