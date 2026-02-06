import { routes } from '@/router/Router'
import { NavLink } from 'react-router'
import styles from './MainMenu.module.css'

function MainMenu() {
	return (
		<nav className={styles.navbar}>

			<ul>
				{routes[0].children.map((route, index) => (
					<li key={index}>
						<NavLink to={route.path}
							className={({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')}
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
