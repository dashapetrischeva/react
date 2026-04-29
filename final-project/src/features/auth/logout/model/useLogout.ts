import { useLogoutMutation } from '../../api/authApi'
import { useDispatch } from 'react-redux'
import { logout as logoutAction } from '../../api/authSlice'
import { UseLogoutReturn } from './useLogout.types'


export function useLogout(): UseLogoutReturn {
	const [logoutApi] = useLogoutMutation()
	const dispatch = useDispatch()

	const logout = async (): Promise<void> => {
		await logoutApi().unwrap()
		dispatch(logoutAction())
	}

	return { logout }
}
