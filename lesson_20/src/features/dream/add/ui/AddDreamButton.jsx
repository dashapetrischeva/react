import { NavLink } from "react-router";
import styles from './AddDreamButton.module.css'
import { useTranslation } from "react-i18next";

function AddDreamButton() {
	const { t } = useTranslation()
	return (
		<NavLink to="/dreams/new" className={styles.button}>
			+ {t('dreams.addButton')}
		</NavLink>
	);
}

export default AddDreamButton;