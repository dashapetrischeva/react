import React from 'react'
import { DeleteUserButton } from '@/features/users/deleteUser/ui/DeleteUserButton'
export function UserListItem({ user }) {

	return (
		<div style={{ borderBottom: '1px solid #ccc', padding: '8px 0' }}>
			<strong>{user.name}</strong> — {user.email} — Роль: {user.role}
			<DeleteUserButton user={user} />
		</div>
	)
}