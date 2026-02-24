import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './slices/postsSlice';
import expensesReducer from './slices/expensesSlice';
export const store = configureStore({
	reducer: {
		posts: postsReducer,
		expenses: expensesReducer,
	},
})