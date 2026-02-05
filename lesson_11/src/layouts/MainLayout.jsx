import MainMenu from "@/components/MainMenu";
import { Outlet } from "react-router";
import styles from './MainLayout.module.css'
function MainLayout() {
	return (
		<>
			<MainMenu />
			<div className={styles.main}>
				<Outlet />
			</div>
		</>
	);
}

export default MainLayout;