import React, { useState } from 'react'
import { useGetUsersQuery } from '../../entities/user/api/userApi'
import { UserListItem } from '../../entities/user/ui/UserListItem'

export function UserList() {
	const [page, setPage] = useState(1)
	const limit = 10
	const { data, isLoading, error } = useGetUsersQuery({ page, limit })

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error.toString()}</div>

	const users = data?.items || []
	const totalPages = data?.totalPages || 1

	return (
		<div>
			{users.map((user) => (
				<UserListItem key={user.id} user={user} />
			))}

			<div style={{ marginTop: 10 }}>
				<button
					onClick={() => setPage((p) => Math.max(p - 1, 1))}
					disabled={page === 1}
				>
					Previous
				</button>

				<span style={{ margin: '0 10px' }}>
					Page {page} of {totalPages}
				</span>

				<button
					onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
					disabled={page === totalPages}
				>
					Next
				</button>
			</div>
		</div>
	)
}