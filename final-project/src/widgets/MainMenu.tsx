import { routes } from '@/app/router/routes'
import { NavLink } from 'react-router'
import styles from './MainMenu.module.css'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth'
import { useTranslation } from 'react-i18next'
import type { MainMenuProps } from './MainMenu.types'

function MainMenu({}: MainMenuProps) {
	const user = useSelector(selectAuthUser)
	const { t } = useTranslation()
	const allowedRoutes = (routes[0].children ?? []).filter(({ meta, path }) => {
		if (!meta || !path) return false
		if (!meta.isInMenu) return false
		if (!meta.requireAuth) return true
		if (!user) return false
		if (!meta.roles) return true
		return user?.role ? meta.roles.includes(user.role) : false
	})
	return (
		<nav className={styles.mainMenu}>
			<ul className={styles.menuList}>
				{allowedRoutes.map(({ path, meta }) => (
					<li key={path}>
						<NavLink
							to={path!}
							className={({ isActive }) =>
								`${styles.menuItem} ${isActive ? styles.active : ''}`
							}
						>
							{t(`menu.${meta?.menuKey ?? ''}`)}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default MainMenu
