import MainMenu from './MainMenu'

import styles from './Header.module.css'

function Header() {
	return (
		<header className={styles.header}>
			<MainMenu />
		</header>
	)
}

export default Header