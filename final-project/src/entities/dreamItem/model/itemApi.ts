import type { GetListResult, DreamItem } from './itemApi.types'
import { api, db } from '@/shared/api/baseApi'
import type { ListResult } from '@/shared/services/DbOperations.types'

export const itemApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getList: builder.query<GetListResult, string | undefined>({
			queryFn: async (userId) => {
				if (!userId) {
					const emptyResult: ListResult<DreamItem> = { data: [] }
					return { data: emptyResult }
				}

				const result = (await db.getList(userId)) as ListResult<DreamItem>

				return { data: result }
			},
			providesTags: ['DreamsList']
		})
	}),
})

export const { useGetListQuery } = itemApi
