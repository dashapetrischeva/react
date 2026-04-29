import { api, db } from '@/shared/api/baseApi'
import type { DeleteItemParams } from './deleteApi.types'

export const deleteItemApi = api.injectEndpoints({
	endpoints: (builder) => ({
		deleteItem: builder.mutation<boolean, DeleteItemParams>({
			async queryFn({ id }) {
				try {
					await db.delete(id)
					return { data: true }
				} catch (error) {
					return {
						error: {
							status: 'CUSTOM_ERROR',
							data: error,
						},
					}
				}
			},
			invalidatesTags: (_, __, { id }) => [
				{ type: 'DreamItem', id },
				'DreamsList',
			],
		}),
	}),
})

export const { useDeleteItemMutation } = deleteItemApi