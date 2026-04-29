import { LogoutButton } from '@/features/auth/logout/ui/LogoutButton'
import userDefault from '@/assets/user-default.svg'
import { GoogleAuthProvider } from 'firebase/auth'
import { LoginLink } from '@/features/auth/login/ui/LoginLink'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth/api/authSlice'
import styles from './UserInfo.module.css'
import type { UserInfoProps } from './UserInfo.types'

export function UserInfo({ }: UserInfoProps) {
	const user = useSelector(selectAuthUser)

	if (!user) {
		return <LoginLink className={styles.loginLink} style={{}} />
	}

	const provider = new GoogleAuthProvider()
	provider.setCustomParameters({ prompt: 'select_account' })

	return (
		<div className={styles.userInfo}>
			<img
				src={user.photoURL || userDefault}
				alt="user avatar"
				className={styles.avatar}
			/>
			<div className={styles.userDetails}>
				<span className={styles.email}>{user.email}</span>
				<span className={styles.role}>{user.role}</span>
			</div>
			<LogoutButton className={styles.logoutButton} />
		</div>
	)
}
