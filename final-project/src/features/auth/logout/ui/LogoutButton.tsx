import { useLogout } from '@/features/auth/logout/model/useLogout'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { LogoutButtonProps } from './LogoutButton.types'


export function LogoutButton({ className }: LogoutButtonProps) {
	const { logout } = useLogout()
	const navigate = useNavigate()
	const { t } = useTranslation()

	const handleLogout = () => {
		logout()
		navigate('/login')
	}

	return (
		<button
			onClick={handleLogout}
			className={
				className ||
				'ml-2 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm font-semibold transition'
			}
		>
			{t('auth.logoutButton')}
		</button>
	)
}
