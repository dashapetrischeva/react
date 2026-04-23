import { api, db } from '@/shared/api/baseApi'

export const itemApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getList: builder.query({
			queryFn: async (userId) => {
				if (!userId) {
					return { data: [] }
				}

				const result = await db.getList(userId)

				return result
			}
		})
	}),
})

export const { useGetListQuery } = itemApi
