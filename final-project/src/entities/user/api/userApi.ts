import DbOperations from '@/shared/services/DbOperations'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User, UpdateUserRolePayload, GetAllUsersResult, ApiErrorResponse } from './userApi.types'

const db = new DbOperations('users')

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fakeBaseQuery(),
	tagTypes: ['User'],
	endpoints: (builder) => ({
		getAllUsers: builder.query<GetAllUsersResult, void>({
			async queryFn() {
				try {
					const users = await db.getAll()
					return { data: { data: users.data.map(u => { const { id, ...rest } = u; return { ...rest, uid: id } as User }) } }
				} catch (error) {
					const errorMessage = error instanceof Error ? error.message : 'Unknown error'
					return { error: { message: errorMessage } as ApiErrorResponse }
				}
			},
			providesTags: ['User'],
		}),
		updateUserRole: builder.mutation<boolean, UpdateUserRolePayload>({
			async queryFn({ uid, role }) {
				try {
					await db.update(uid, { role })
					return { data: true }
				} catch (error) {
					const errorMessage = error instanceof Error ? error.message : 'Unknown error'
					return { error: { message: errorMessage } as ApiErrorResponse }
				}
			},
			invalidatesTags: ['User'],
		}),
		addUser: builder.mutation<boolean, User>({
			async queryFn(user) {
				try {
					await db.setWithId(user.uid, user)
					return { data: true }
				} catch (error) {
					const errorMessage = error instanceof Error ? error.message : 'Unknown error'
					return { error: { message: errorMessage } as ApiErrorResponse }
				}
			},
			invalidatesTags: ['User'],
		}),
		deleteUser: builder.mutation<boolean, string>({
			async queryFn(uid) {
				try {
					await db.delete(uid)
					return { data: true }
				} catch (error) {
					const errorMessage = error instanceof Error ? error.message : 'Unknown error'
					return { error: { message: errorMessage } as ApiErrorResponse }
				}
			},
			invalidatesTags: ['User'],
		}),
	}),
})

export const {
	useGetAllUsersQuery,
	useUpdateUserRoleMutation,
	useDeleteUserMutation,
	useAddUserMutation,
} = userApi
