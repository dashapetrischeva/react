export interface User {
	uid: string
	email: string
	displayName?: string
	role?: string
	[key: string]: any
}

export interface UpdateUserRolePayload {
	uid: string
	role: string
}

export interface GetAllUsersResult {
	data: User[]
	[key: string]: any
}

export interface ApiErrorResponse {
	message: string
	[key: string]: any
}

export interface UserApiError {
	error: ApiErrorResponse
}
