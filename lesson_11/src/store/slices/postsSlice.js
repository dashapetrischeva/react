import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from './postsThunk'

const initialState = {
	posts: [],
	loading: false,
	error: null,
}

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		clearError: (state) => {
			state.error = null
		},
		clearPosts: (state) => {
			state.posts = []
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.posts = action.payload
				state.loading = false
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload.error
			})
	},
})

// Action creators are generated for each case reducer function
export const { clearError, clearPosts } = postsSlice.actions

export default postsSlice.reducer
