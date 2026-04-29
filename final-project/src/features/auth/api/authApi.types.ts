export interface User {
	uid?: string
	email?: string
	displayName?: string
	photoURL?: string
	role?: string
}

export interface LoginParams {
	email: string
	password: string
}

export interface SignUpParams {
	email: string
	password: string
	displayName: string
}

export type AuthResponse = User & Record<string, any>
