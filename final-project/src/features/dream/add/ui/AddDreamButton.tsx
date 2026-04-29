import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import styles from './AddDreamButton.module.css'
import { AddDreamButtonProps } from './AddDreamButton.types'


export default function AddDreamButton({ }: AddDreamButtonProps) {
	const { t } = useTranslation()

	return (
		<NavLink to="/dreams/new" className={styles.button}>
			+ {t('dreams.addButton')}
		</NavLink>
	)
}
