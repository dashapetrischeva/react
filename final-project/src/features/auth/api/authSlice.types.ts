import type { User as AuthUser } from './authApi.types'

export type User = AuthUser

export interface SetUserPayload {
	user: User
}
