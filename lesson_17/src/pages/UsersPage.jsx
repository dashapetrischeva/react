import AddUserButton from '@/features/users/addUser/ui/AddUserButton'
import { UserList } from '@/widgets/userList/UserList'
export default function UsersPage() {
	return (
		<div>
			<h1>Users</h1>
			<AddUserButton />
			<UserList />
		</div>
	)
}