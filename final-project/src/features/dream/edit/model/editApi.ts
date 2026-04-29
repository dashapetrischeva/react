import { api, db } from '@/shared/api/baseApi'
import type { DreamItem, EditItemParams } from './editApi.types'

export const editItemApi = api.injectEndpoints({
	endpoints: (builder) => ({
		editItem: builder.mutation<boolean, EditItemParams>({
			async queryFn({ id, data }) {
				try {
					await db.update(id, data)
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
				'DreamsList', // ⚠️ проверь чтобы совпадало везде
			],
		}),

		getItem: builder.query<DreamItem | undefined, string>({
			async queryFn(id) {
				try {
					const data = await db.getById(id)

					return {
						data: data as DreamItem | undefined,
					}
				} catch (error) {
					return {
						error: {
							status: 'CUSTOM_ERROR',
							data: error,
						},
					}
				}
			},
			providesTags: (_, __, id) => [{ type: 'DreamItem', id }],
		}),
	}),
})

export const { useEditItemMutation, useGetItemQuery } = editItemApi