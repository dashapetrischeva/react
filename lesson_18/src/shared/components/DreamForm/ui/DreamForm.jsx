import styles from './DreamForm.module.css'
import { useItemForm } from '../model/useDreamForm'

export default function DreamForm({ onSubmit, initialValues }) {
	const { values, errors, isSubmitting, handleChange, handleSubmit } =
		useItemForm(initialValues, onSubmit)
	const isEditMode = Boolean(initialValues?.id)
	return (
		<form className={styles.form} onSubmit={handleSubmit} autoComplete="off">

			<div>
				<label className={styles.label} htmlFor="description">
					Dream description
				</label>
				<textarea
					className={`${styles.input} ${styles.textarea}`}
					id="description"
					name="description"
					value={values.description}
					onChange={handleChange}

				/>
				{errors.description && (
					<div className={styles.error}>{errors.description}</div>
				)}
			</div>
			<div>
				<label className={styles.label} htmlFor="year">
					Achieve dreams year
				</label>
				<input
					className={styles.input}
					id="year"
					name="year"
					type="number"
					value={values.year}
					onChange={handleChange}

				/>
				{errors.year && <div className={styles.error}>{errors.year}</div>}
			</div>
			<div>
				<label className={styles.label} htmlFor="friend">
					Friend
				</label>
				<input
					className={styles.input}
					id="friend"
					name="friend"
					type="text"
					value={values.friend}
					onChange={handleChange}
				/>
				{errors.friend && <div className={styles.error}>{errors.friend}</div>}
			</div>
			<button className={styles.button} type="submit" disabled={isSubmitting}>
				{isSubmitting
					? isEditMode ? 'Editing' : 'Adding'
					: isEditMode ? 'Edit' : 'Add'}
			</button>
		</form>
	)
}
