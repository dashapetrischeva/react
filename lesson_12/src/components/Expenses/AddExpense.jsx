

import { useId, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addExpense } from '@/store/slices/expensesSlice';
import styles from "./AddExpense.module.css";
import { categoriesList } from "@/data/categories";
function AddExpense() {
	const [expense, setExpense] = useState({
		money: "",
		category: "",
	});
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const moneyId = useId()
	const categoryId = useId()
	function handleChange(e) {
		const { name, value } = e.target;
		setExpense(prev => ({
			...prev,
			[name]: value
		}));
	}


	function handleSubmit(e) {
		e.preventDefault();
		if (!expense.money || !expense.category) {
			alert('Fill in all fields.');
			return;
		}
		dispatch(addExpense(expense));
		setExpense({
			money: "",
			category: "",
		});
	}
	return (
		<div className={styles.formContainer}>
			<h1 className={styles.formTitle}>Add Product</h1>
			<form onSubmit={handleSubmit}>
				<div className={styles.formField}>
					<div className={styles.fieldLabel}>
						<label htmlFor={moneyId}>Money:</label>
					</div>
					<div className={styles.fieldInput}>
						<input
							type="text"
							name="money"
							id={moneyId}
							value={expense.money}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className={styles.formField}>
					<div className={styles.fieldLabel}>
						<label htmlFor={categoryId}>Category: </label>
					</div>
					<div className={styles.fieldInput}>
						<select name="category" id={categoryId} value={expense.category} className={styles.select} onChange={handleChange}>
							<option value="">Make a choice</option>
							{categoriesList.map((category) => (
								<option key={category.id} value={category.name}>
									{category.name}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className={styles.formButtons}>
					<button>Add</button>
				</div>
			</form>
		</div>
	);
}

export default AddExpense;