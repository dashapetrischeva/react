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

			<h2>Task 2</h2>
			<div className={styles.blockForm}>
				<select value={ticketClass}
					onChange={onChangeSelectHandler}
				>
					<option value="">Choose ticket class</option>
					<option value="1">Business</option>
					<option value="2">Economy</option>
				</select>

				{ticketClass === "1" && (
					<div className={styles.submenu}>
						<div className={styles.form__field}>
							<input type="checkbox" name="newspaper" />
							<label>Newspaper</label>
						</div>

						<div className={styles.form__field}>
							<input
								type="checkbox"
								name="cognac"
								checked={isCognacChecked}
								onChange={(e) => setIsCognacChecked(e.target.checked)}
							/>
							<label>Cognac</label>
						</div>


						{isCognacChecked && (
							<div>
								<div className={styles.title}>Snacks:</div>
								<div className={styles.form__field}>
									<input type="radio" name="snacks" value="yes" />
									<label>Yes</label>
								</div>
								<div className={styles.form__field}>
									<input type="radio" name="snacks" value="no" defaultChecked />
									<label>No</label>
								</div>
							</div>
						)}
					</div>
				)}


				{ticketClass === "2" && (
					<div className={styles.submenu}>
						<div className={styles.form__field}>


							<select>
								<option value="">Choose beer</option>
								<option value="wheat">Light</option>
								<option value="dark">Dark</option>
							</select>
						</div>
						<div className={styles.form__field}>

							<select>
								<option value="">Choose chips</option>
								<option value="cheese">Cheese</option>
								<option value="paprika">Paprika</option>
								<option value="salt">Salt</option>
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