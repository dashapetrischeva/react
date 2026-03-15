import { NavLink } from "react-router";
import styles from './AddDreamButton.module.css'

function AddDreamButton() {
	return (
		<NavLink to="/dreams/new" className={styles.button}>
			+ Add dream
		</NavLink>
	);
}

export default AddDreamButton;