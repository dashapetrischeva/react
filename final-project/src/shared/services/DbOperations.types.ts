import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore/lite'

export interface PaginationParams {
	userId: string
	page?: number
	perPage?: number
	cursors?: QueryDocumentSnapshot<DocumentData>[]
}

export interface PaginationResult<T = DocumentData> {
	data: (T & { id: string })[]
	cursor: QueryDocumentSnapshot<DocumentData> | null
	hasMore: boolean
}

export interface ListResult<T = DocumentData> {
	data: (T & { id: string })[]
}

export type DocumentResult<T = DocumentData> = T & {
	id: string
	[key: string]: any
}

export interface DbOperationsConfig {
	collectionName: string
}