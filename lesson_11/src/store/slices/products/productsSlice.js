import { createSlice } from '@reduxjs/toolkit'
import { notebooksList } from '@/data/3_data_notebooks'
const initialState = {
	products: notebooksList,
	filter: '',
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.products.push(action.payload)
		},
		filterProducts: (state, action) => {
			state.filter = action.payload
		},
	},

})

export const { addProduct, filterProducts } = productsSlice.actions

export default productsSlice.reducer