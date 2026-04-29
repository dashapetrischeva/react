import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from '../services/DbOperations'
import type { TagType, ApiConfig } from './baseApi.types'

export const db = new DbOperations('DreamPlanner')

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fakeBaseQuery(),
	tagTypes: ['DreamItem', 'DreamsList'] as TagType[],
	endpoints: () => ({}),
} as const satisfies ApiConfig)
