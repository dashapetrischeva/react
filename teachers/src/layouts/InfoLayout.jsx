import { Outlet } from "react-router";
import GoHomeButton from "../components/GoHomeButton";
import styles from './InfoLayout.module.css'
function InfoLayout() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.mainContainer}>
					<Outlet />
				</div>
				<GoHomeButton />
			</main>
		</div>
	);
}

export default InfoLayout;