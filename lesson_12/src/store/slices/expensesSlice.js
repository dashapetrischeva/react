import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	expenses: []
}

export const expensesSlice = createSlice({
	name: 'expenses',
	initialState,
	reducers: {
		addExpense: (state, action) => {
			state.expenses.push(action.payload)
		},
		repeatExpense: (state, action) => {
			const expenseIndex = action.payload
			const repeatExpense = state.expenses[expenseIndex]
			state.expenses.push({ ...repeatExpense })
		},
		deleteExpense: (state, action) => {
			state.expenses = state.expenses.filter((_, index) => index !== action.payload)
		},
	},
})

export const { addExpense, repeatExpense, deleteExpense } = expensesSlice.actions

export default expensesSlice.reducer