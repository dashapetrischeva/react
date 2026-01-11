import { Outlet } from "react-router";
import NavBar from "./navbar/NavBar";
import styles from './Layout.module.css'
function Layout() {
	return (
		<>
			<NavBar />
			<main className={styles.page}>
				<Outlet />
			</main>
		</>
	);
}

export default Layout;