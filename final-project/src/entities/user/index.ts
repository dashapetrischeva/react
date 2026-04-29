// FSD entry for user entity
export { userApi, useGetAllUsersQuery, useUpdateUserRoleMutation, useDeleteUserMutation, useAddUserMutation } from './api/userApi'
export type { User, UpdateUserRolePayload, GetAllUsersResult } from './api/userApi.types'
export { UserItem } from './ui/UserItem'
export type { UserItemProps } from './ui/UserItem.types'
