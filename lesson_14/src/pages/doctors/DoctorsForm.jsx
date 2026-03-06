import { useState, useEffect } from "react";
import styles from "./DoctorsForm.module.css";
import { useNavigate, useParams } from "react-router";
import { useCreateDoctorMutation, useEditDoctorMutation, useGetDoctorByIdQuery } from "@/api/slices/doctorApi";
const emptyDoctorData = {
	"fullName": "",
	"specialty": "",
	"email": "",
	"phone": "",
	"room": "",
	"notes": ""
}
function DoctorsForm() {
	const { id } = useParams()
	const DoctorId = id
	const isEditMode = Boolean(DoctorId)
	const {
		data: doctor,
		isLoading: isDoctorLoading,
	} = useGetDoctorByIdQuery(DoctorId, {
		skip: !isEditMode,
	})
	const navigate = useNavigate()
	const [dataForm, setDataForm] = useState({ ...emptyDoctorData })
	const [createDoctor, createState] = useCreateDoctorMutation()
	const [editDoctor, editState] = useEditDoctorMutation()
	const handleChange = (e) => {
		setDataForm({ ...dataForm, [e.target.name]: e.target.value })
	}
	const buttonLabel = id ? "Save" : "Add Doctor"

	const isLoading =
		createState.isLoading ||
		editState.isLoading ||
		isDoctorLoading

	const isError = createState.isError || editState.isError


	useEffect(() => {
		if (doctor) {
			setDataForm({ ...emptyDoctorData, ...doctor })
		}
	}, [doctor])

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			if (isEditMode) {
				await editDoctor({ id: DoctorId, ...dataForm })
			} else {
				await createDoctor(dataForm)
			}

			setDataForm({ ...emptyDoctorData })
			navigate('/doctors')

		} catch (error) {
			console.error("Failed to save doctor", error)
		}
	}


	return (
		<div className={styles.container}>
			<h1>Add Doctor</h1>
			{isLoading && <p>Loading...</p>}
			{isError && <p>Error loading data</p>}
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.formGroup}>
					<label htmlFor="fullName" className={styles.label}>Full Name:</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						className={styles.input}
						value={dataForm.fullName}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="specialty" className={styles.label}>Specialty:</label>
					<input
						type="text"
						id="specialty"
						name="specialty"
						className={styles.input}
						value={dataForm.specialty}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="notes" className={styles.label}>Doctors hours:</label>
					<input
						type="text"
						id="notes"
						name="notes"
						className={styles.input}
						value={dataForm.notes}
						onChange={handleChange}
					/>


				</div>
				<div className={styles.formGroup}>
					<label htmlFor="room" className={styles.label}>Room:</label>
					<input
						type="text"
						id="room"
						name="room"
						className={styles.input}
						value={dataForm.room}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="email" className={styles.label}>Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						className={styles.input}
						value={dataForm.email}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="phone" className={styles.label}>Phone:</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						className={styles.input}
						value={dataForm.phone}
						onChange={handleChange}
					/>
				</div>

				<div className={styles.buttonGroup}>
					<button type="submit" className={styles.submitButton}>{buttonLabel}</button>
				</div>
			</form>
		</div>
	);
}

export default DoctorsForm;

