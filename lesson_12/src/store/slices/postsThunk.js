import { loadPosts, createPost, removePost } from '@/api/postsApi'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
	'posts/fetch',
	async ({ page, limit }, { rejectWithValue }) => {
		try {
			return await loadPosts({ page, limit })
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
export const addPost = createAsyncThunk(
	'posts/add',
	async (newPost, { rejectWithValue }) => {
		try {
			return await createPost(newPost)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
export const deletePost = createAsyncThunk(
	'posts/delete',
	async (id, { rejectWithValue }) => {
		try {
			return await removePost(id)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)