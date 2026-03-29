import { useSelector } from "react-redux"
import { selectAuthUser } from '@/features/auth'
import { useDeleteUserMutation } from "../model/deleteUserApi"

export function DeleteUserButton({ user }) {
	const currentUser = useSelector(selectAuthUser)
	const isAdmin = currentUser?.role === 'admin'
	const [deleteUser, { isLoading }] = useDeleteUserMutation()
	if (!isAdmin) return null
	return (
		isAdmin && <button onClick={() => deleteUser(user.id)}>{isLoading ? 'Видаляється…' : 'Видалити'}</button>
	)
}
