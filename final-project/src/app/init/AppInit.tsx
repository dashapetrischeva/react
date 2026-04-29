import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/shared/config/firebase-config'
import { logout } from '@/features/auth'
import { useRefreshMutation } from '@/features/auth/api/authApi'
import { StorageEventHandler, AppInitComponent } from './AppInit.types'

const AppInit: AppInitComponent = () => {
	const { i18n } = useTranslation()
	const dispatch = useDispatch()
	const [refresh] = useRefreshMutation()

	// i18n sync between tabs
	useEffect(() => {
		const onStorage: StorageEventHandler = (e) => {
			if (
				e.key === 'i18nextLng' &&
				e.newValue &&
				e.newValue !== i18n.language
			) {
				i18n.changeLanguage(e.newValue)
			}
		}

		window.addEventListener('storage', onStorage as EventListener)
		return () => window.removeEventListener('storage', onStorage as EventListener)
	}, [i18n])

	//  Firebase Auth sync
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				try {
					await refresh(undefined).unwrap()
				} catch {
					dispatch(logout())
				}
			} else {
				dispatch(logout())
			}
		})

		return () => unsubscribe()
	}, [dispatch, refresh])

	return null
}

export default AppInit