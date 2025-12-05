import styles from "./TicketSelection.module.css"
import { useState } from 'react'
function TicketSelection() {
	const [ticketClass, setTicketClass] = useState('')
	const [isCognacChecked, setIsCognacChecked] = useState(false)



	function onChangeSelectHandler(e) {
		setTicketClass(e.target.value)
		setIsCognacChecked(false)
	}

	return (
		<div className={ticketClass === "1" ? styles.business : ticketClass === "2" ? styles.economy : ""}>

			<h2>Задача 2</h2>
			<div className={styles.blockForm}>
				<select value={ticketClass}
					onChange={onChangeSelectHandler}
				>
					<option value="">Оберіть клас квитку</option>
					<option value="1">Бізнес</option>
					<option value="2">Економ</option>
				</select>

				{ticketClass === "1" && (
					<div className={styles.submenu}>
						<div className={styles.form__field}>
							<input type="checkbox" name="newspaper" />
							<label>Газета</label>
						</div>

						<div className={styles.form__field}>
							<input
								type="checkbox"
								name="cognac"
								checked={isCognacChecked}
								onChange={(e) => setIsCognacChecked(e.target.checked)}
							/>
							<label>Коньяк</label>
						</div>


						{isCognacChecked && (
							<div>
								<div className={styles.title}>Закуски:</div>
								<div className={styles.form__field}>
									<input type="radio" name="snacks" value="yes" />
									<label>Так</label>
								</div>
								<div className={styles.form__field}>
									<input type="radio" name="snacks" value="no" defaultChecked />
									<label>Ні</label>
								</div>
							</div>
						)}
					</div>
				)}


				{ticketClass === "2" && (
					<div className={styles.submenu}>
						<div className={styles.form__field}>


							<select>
								<option value="">Оберіть пиво</option>
								<option value="wheat">Світле</option>
								<option value="dark">Темне</option>
							</select>
						</div>
						<div className={styles.form__field}>

							<select>
								<option value="">Оберіть чипси</option>
								<option value="cheese">Сирні</option>
								<option value="paprika">Паприка</option>
								<option value="salt">Солоні</option>
								<option value="bbq">BBQ</option>
							</select>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default TicketSelection;