import { useLoginMutation, useGoogleLoginMutation } from '../../api/authApi'
import type { LoginParams } from '../../api/authApi.types'
import { UseLoginReturn } from './useLogin.types'


export function useLogin(): UseLoginReturn {
	const [login, { isLoading, error }] = useLoginMutation()
	const [googleLogin, { isLoading: isGoogleLoading, error: googleError }] =
		useGoogleLoginMutation()

	const handleLogin = async (data: LoginParams): Promise<void> => {
		await login(data).unwrap()
	}

	const handleGoogleLogin = async (): Promise<void> => {
		await googleLogin().unwrap()
	}

	return {
		login: handleLogin,
		googleLogin: handleGoogleLogin,
		isLoading: isLoading || isGoogleLoading,
		error: error || googleError,
	}
}
