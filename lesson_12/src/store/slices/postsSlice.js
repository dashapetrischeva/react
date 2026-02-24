import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts, addPost, deletePost } from './postsThunk'

const initialState = {
	posts: [],
	meta: {
		page: 1,
		limit: 10,
		totalPagesNumber: 0,
	},
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
			state.page = 1
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.meta.page = action.payload.meta.page
				state.meta.totalPagesNumber = action.payload.meta.totalPagesNumber
				state.posts = action.payload.posts
				state.loading = false
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload.error
			})
			// add
			.addCase(addPost.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(addPost.fulfilled, (state, action) => {
				state.loading = false
				state.posts.unshift(action.payload)
			})
			.addCase(addPost.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload.error
			})
			// delete
			.addCase(deletePost.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(deletePost.fulfilled, (state, action) => {
				state.loading = false
				const deletedId = action.payload.id
				state.posts = state.posts.filter((post) => post.id !== deletedId)
			})
			.addCase(deletePost.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload.error
			})
	},
})

// Action creators are generated for each case reducer function
export const { clearError, clearPosts } = postsSlice.actions

export default postsSlice.reducer
