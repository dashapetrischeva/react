import {
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signOut,
	getAuth,
} from 'firebase/auth'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from '@/shared/services/DbOperations'
import type {
	User,
	LoginParams,
	SignUpParams,
	AuthResponse,
} from './authApi.types'

// Перетворює Firebase user на plain object
function mapFirebaseUser(user: any): User | null {
	if (!user) return null
	return {
		uid: user.uid,
		email: user.email,
		displayName: user.displayName,
		photoURL: user.photoURL,
		role: user.role || 'user',
	}
}

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fakeBaseQuery(),
	endpoints: (builder) => ({
		//------------------ Логін з email+password
		login: builder.mutation<AuthResponse, LoginParams>({
			async queryFn({ email, password }) {
				try {
					const auth = getAuth()
					const result = await signInWithEmailAndPassword(auth, email, password)
					const usersDb = new DbOperations('users')
					const userData = await usersDb.getById(result.user.uid)
					return { data: { ...mapFirebaseUser(result.user), ...userData } }
				} catch (error) {
					return {
						error: { message: (error as Error).message },
					}
				}
			},
		}),
		//------------------ Логін з аккаунтом Google
		googleLogin: builder.mutation<AuthResponse, void>({
			async queryFn() {
				try {
					const auth = getAuth()
					const provider = new GoogleAuthProvider()
					provider.setCustomParameters({ prompt: 'select_account' })
					const result = await signInWithPopup(auth, provider)
					const usersDb = new DbOperations('users')
					if (
						result.user &&
						result.user.metadata.creationTime ===
						result.user.metadata.lastSignInTime
					) {
						await usersDb.setWithId(result.user.uid, {
							uid: result.user.uid,
							email: result.user.email,
							displayName: result.user.displayName,
							photoURL: result.user.photoURL || '',
							role: 'user',
							createdAt: new Date().toISOString(),
						})
					}
					const userData = await usersDb.getById(result.user.uid)
					return { data: { ...mapFirebaseUser(result.user), ...userData } }
				} catch (error) {
					return {
						error: { message: (error as Error).message },
					}
				}
			},
		}),
		//------------------ Реєстрація з Firebase
		signUp: builder.mutation<AuthResponse, SignUpParams>({
			async queryFn({ email, password, displayName }) {
				try {
					const auth = getAuth()
					const result = await createUserWithEmailAndPassword(
						auth,
						email,
						password
					)
					const usersDb = new DbOperations('users')
					await usersDb.setWithId(result.user.uid, {
						uid: result.user.uid,
						email: result.user.email,
						displayName,
						photoURL: result.user.photoURL || '',
						role: 'user',
						createdAt: new Date().toISOString(),
					})
					return {
						data: {
							...mapFirebaseUser(result.user),
							displayName,
							photoURL: result.user.photoURL || '',
						},
					}
				} catch (error) {
					return {
						error: { message: (error as Error).message },
					}
				}
			},
		}),
		//------------------ Оновлення профілю (refresh)
		refresh: builder.mutation<AuthResponse, void>({
			async queryFn() {
				try {
					const auth = getAuth()
					const user = auth.currentUser
					if (!user)
						return { error: { message: 'Not authenticated' } }
					const usersDb = new DbOperations('users')
					const userData = await usersDb.getById(user.uid)
					return { data: { ...mapFirebaseUser(user), ...userData } }
				} catch (error) {
					return {
						error: { message: (error as Error).message },
					}
				}
			},
		}),
		//------------------ Вихід з Firebase
		logout: builder.mutation<boolean, void>({
			async queryFn() {
				try {
					const auth = getAuth()
					await signOut(auth)
					return { data: true }
				} catch (error) {
					return {
						error: { message: (error as Error).message },
					}
				}
			},
		}),
	}),
})

export const {
	useLoginMutation,
	useGoogleLoginMutation,
	useSignUpMutation,
	useLogoutMutation,
	useRefreshMutation,
} = authApi
