import { useDispatch } from "react-redux";
import { deleteExpense, repeatExpense } from "@/store/slices/expensesSlice";
import styles from "./ExpenseItem.module.css";

function ExpenseItem({ expense, index }) {
	const dispatch = useDispatch();

	return (
		<div className={styles.expenseItem}>
			<div>{expense.category}</div>
			<div>{expense.money}</div>
			<div>
				<button className={styles.delete} onClick={() => dispatch(deleteExpense(index))}>Delete</button>
				<button className={styles.repeat} onClick={() => dispatch(repeatExpense(index))}>Repeat</button>
			</div>
		</div>
	);
}

export default ExpenseItem;