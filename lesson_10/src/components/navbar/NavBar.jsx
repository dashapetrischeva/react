import styles from './NavBar.module.css'
import { NavLink } from 'react-router'
function NavBar() {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<NavLink to='/' className={({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')}>Home</NavLink>
				</li>
				<li>
					<NavLink to='/about' className={({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')}>About</NavLink>
				</li>
				<li>
					<NavLink to='/contacts' className={({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')}>Contacts</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;