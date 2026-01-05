import styles from './NavBar.module.css'
import { NavLink } from 'react-router'
function NavBar() {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<NavLink to='/' className={({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')}>Головна</NavLink>
				</li>
				<li>
					<NavLink to='/shop' className={({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')}>Магазин</NavLink>
				</li>
				<li>
					<NavLink to='/payment' className={({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')}>Правила оплати</NavLink>
				</li>
				<li>
					<NavLink to='/contacts' className={({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')}>Контакти</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;