import { routes } from "@/router/Routes";
import { NavLink } from "react-router";
import styles from "./MainMenu.module.css";

function MainMenu() {
	const menuItems = routes[0].children.filter(route => route?.meta?.title)

	return (

		<nav className={styles.nav}>
			<ul className={styles.navList}>

				{
					menuItems.map((route, index) => {
						const path = route.index ? "/" : route.path;

						return (
							<li key={index}>
								<NavLink
									to={path}
									end={route.index}
									className={({ isActive }) =>
										`${styles.navLink} ${isActive ? styles.activeLink : ''}`
									}

								>
									{route.meta.title}
								</NavLink>
							</li>
						);
					})}



			</ul>
		</nav>

	);
}

export default MainMenu;