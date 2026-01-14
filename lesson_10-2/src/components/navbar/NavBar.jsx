import styles from './NavBar.module.css'
import { NavLink } from 'react-router'
function NavBar() {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<NavLink to='/' className={({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')}>Buses</NavLink>
				</li>
				<li>
					<NavLink to='/hotels' className={({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')}>Hotels</NavLink>
				</li>
				<li>
					<NavLink to='/results' className={({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')}>Results</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;