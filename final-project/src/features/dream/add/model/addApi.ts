import { api, db } from '@/shared/api/baseApi'
import { AddItemParams } from './addApi.types'


export const addItemApi = api.injectEndpoints({
	endpoints: (builder) => ({
		addItem: builder.mutation<boolean, AddItemParams>({
			async queryFn({ item, userId }) {
				try {
					await db.add(item, userId)
					return { data: true }
				} catch (error) {
					return { error }
				}
			},
			invalidatesTags: ['DreamsList'],
		}),
	}),
})

export const { useAddItemMutation } = addItemApi
