import AddExpense from "@/components/Expenses/AddExpense";
import ExpensesList from "@/components/Expenses/ExpensesList";

function ExpensesPage() {
	return (
		<div>

			<AddExpense />
			<ExpensesList />
		</div>
	);
}

export default ExpensesPage;