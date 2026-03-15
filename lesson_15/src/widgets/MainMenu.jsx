import { routes } from '@/app/router/routes'
import { NavLink } from 'react-router'
import styles from './MainMenu.module.css'

function MainMenu() {
	const routesForMenu = routes[0].children.filter((route) => route.meta?.title)
	return (
		<nav className={styles.mainMenu}>
			<ul>
				{routesForMenu.map((route, index) => (
					<li key={index}>
						<NavLink
							to={route.path}
							className={({ isActive }) =>
								isActive
									? `${styles.menuItem} ${styles.active}`
									: styles.menuItem
							}
						>
							{route.meta.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default MainMenu
