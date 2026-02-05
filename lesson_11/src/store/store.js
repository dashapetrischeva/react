import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './slices/postsSlice';
import productsReducer from './slices/products/productsSlice';
export const store = configureStore({
	reducer: {
		posts: postsReducer,
		products: productsReducer,
	},
})

