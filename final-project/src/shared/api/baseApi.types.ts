import type { BaseQueryFn } from '@reduxjs/toolkit/query'

export type TagType = 'DreamItem' | 'DreamsList'

export interface ApiConfig {
	reducerPath: string
	baseQuery: BaseQueryFn
	tagTypes: TagType[]
	endpoints: () => Record<string, never>
}
