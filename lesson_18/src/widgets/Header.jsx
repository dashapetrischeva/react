import MainMenu from './MainMenu'

import styles from './Header.module.css'
import { UserInfo } from './UserInfo'
import LanguageSwitcher from '@/shared/ui/LanguageSwitcher'

function Header() {
	return (
		<header className={styles.header}>
			<MainMenu />
			<LanguageSwitcher />
			<UserInfo />
		</header>
	)
}

export default Header