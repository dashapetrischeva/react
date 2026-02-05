import { loadPosts } from '@/api/postsApi'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
	'posts/fetch',
	async (_, { rejectWithValue }) => {
		try {
			return await loadPosts()
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
