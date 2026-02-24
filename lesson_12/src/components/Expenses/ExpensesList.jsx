import { useSelector } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpensesList.module.css";

function ExpensesList() {
	const { expenses } = useSelector(state => state.expenses)
	return (
		<div className={styles.expensesList}>
			<div className={styles.listHeader}>
				<div>Category</div>
				<div>Money</div>
				<div>Actions</div>
			</div>
			{expenses.map((expense, index) => (
				<ExpenseItem key={index} expense={expense} index={index} />
			))}
		</div>
	);
}

export default ExpensesList;