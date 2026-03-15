import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from '../services/DbOperations'



export const db = new DbOperations('DreamPlanner')

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fakeBaseQuery(),
	tagTypes: ['DreamItem', 'DreamsList'],
	endpoints: () => ({}),
})