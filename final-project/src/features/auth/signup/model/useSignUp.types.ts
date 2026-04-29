import type { SignUpParams } from '../../api/authApi.types'

export interface UseSignUpReturn {
	signUp: (data: SignUpParams) => Promise<void>
	isLoading: boolean
	error: any
}
