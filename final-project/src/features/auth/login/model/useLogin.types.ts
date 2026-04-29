import type { LoginParams } from '../../api/authApi.types'

export interface UseLoginReturn {
	login: (data: LoginParams) => Promise<void>
	googleLogin: () => Promise<void>
	isLoading: boolean
	error: any
}
