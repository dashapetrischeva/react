import { useSignUpMutation } from '../../api/authApi'
import type { SignUpParams } from '../../api/authApi.types'
import { UseSignUpReturn } from './useSignUp.types'


export function useSignUp(): UseSignUpReturn {
	const [signUp, { isLoading, error }] = useSignUpMutation()

	const handleSignUp = async (data: SignUpParams): Promise<void> => {
		await signUp(data).unwrap()
	}

	return { signUp: handleSignUp, isLoading, error }
}
