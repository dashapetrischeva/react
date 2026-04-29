import type { User } from '../api/userApi.types'

export interface UserItemProps {
	user: User
	children?: React.ReactNode
}