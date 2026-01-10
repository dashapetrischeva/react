import { useEffect, useId } from 'react'
import useForm from '../../hooks/useForm'
import apiRoutes from '../../api/apiRoutes'
import { useNavigate, useParams } from 'react-router'
import frontRoutes from '../../routes/frontRoutes'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import styles from './TeachersForm.module.css'
function TeachersForm() {
	const nameId = useId()
	const subjectId = useId()
	const photoId = useId()

	const { id } = useParams()
	const isEditing = !!id
	const saveButtonLabel = isEditing ? 'Save teacher' : 'Add teacher'

	const { values, handleChange, setValues } = useForm({
		name: '',
		subject: '',
		photo: '',
	})

	const navigate = useNavigate()
	const url = isEditing ? apiRoutes.getTeacherById(id) : ''
	const {
		data: fetchedTeacher,
		isLoading,
		error,
	} = useFetch(url, { skip: !isEditing })

	useEffect(() => {
		if (fetchedTeacher) {
			setValues(fetchedTeacher)
		}
	}, [fetchedTeacher])

	async function submitHandle(e) {
		e.preventDefault()
		console.log(isEditing)
		const url = isEditing
			? apiRoutes.updateTeacher(id)
			: apiRoutes.addTeacher
		const method = isEditing ? 'PUT' : 'POST'
		await fetch(url, {
			method,
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(values),
		})

		navigate(frontRoutes.pages.teachers.root)
	}
	const h1 = isEditing ? 'Edit teacher' : 'Add a new teacher'
	return (
		<div>
			<h1>{h1}</h1>
			{!!isLoading && <Loader />}
			{!!error && <div>Error!</div>}
			{!isLoading && !error && (
				<form onSubmit={submitHandle}>
					<div className={styles.formField}>
						<div className={styles.fieldLabel}>
							<label htmlFor={nameId}>Name:</label>
						</div>
						<div className={styles.fieldInput}>
							<input
								type="text"
								name="name"
								id={nameId}
								value={values.name}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className={styles.formField}>
						<div className={styles.fieldLabel}>
							<label htmlFor={subjectId}>Subject: </label>
						</div>
						<div className={styles.fieldInput}>
							<input
								type="text"
								name="subject"
								id={subjectId}
								value={values.subject}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className={styles.formField}>
						<div className={styles.fieldLabel}>
							<label htmlFor={photoId}>Photo:</label>
						</div>
						<div className={styles.fieldInput}>
							<input
								type="text"
								name="photo"
								id={photoId}
								value={values.photo}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className={styles.formButtons}>
						<button>{saveButtonLabel}</button>
					</div>
				</form>
			)}
		</div>
	)
}

export default TeachersForm
