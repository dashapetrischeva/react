import type { DocumentData } from 'firebase/firestore/lite'
import type { ListResult } from '@/shared/services/DbOperations.types'

export interface DreamItem extends DocumentData {
	id: string
	description: string
	year: number
	friend: string
	ownerId: string
	[key: string]: any
}

export interface GetListParams {
	userId: string | undefined
}

export type GetListResult = ListResult<DreamItem>

export interface ItemApiEndpoints {
	getList: {
		queryArg: string | undefined
		baseQueryReturnValue: unknown
		resultType: GetListResult
	}
}
