import { useTranslation } from 'react-i18next'
import type { ChangeEventHandler } from 'react'
import styles from './LanguageSwitcher.module.css'
import { LanguageSwitcherProps } from './LanguageSwitcher.types'


export default function LanguageSwitcher({ }: LanguageSwitcherProps) {
	const { i18n } = useTranslation()
	const lang = i18n.language || 'en'

	const handleChangeLang: ChangeEventHandler<HTMLSelectElement> = (e) => {
		i18n.changeLanguage(e.target.value)
		localStorage.setItem('i18nextLng', e.target.value)
	}

	return (
		<select className={styles.select} value={lang} onChange={handleChangeLang}>
			<option value="en">EN</option>
			<option value="ua">UA</option>
		</select>
	)
}
