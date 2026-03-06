import { useState, useEffect } from "react";
import styles from "./PatientsForm.module.css";
import { useNavigate, useParams } from "react-router";
import { useCreatePatientMutation, useGetPatientByIdQuery, useEditPatientMutation } from "@/api/slices/patientApi";
const emptyPatientData = {
	"fullName": "",
	"birthDate": "",
	"gender": "",
	"phone": "",
	"email": "",
	"address": "",
	"notes": ""
}
function PatientsForm() {
	const { id } = useParams()
	const PatientId = id
	const isEditMode = Boolean(PatientId)
	const {
		data: patient,
		isLoading: isPatientLoading,
	} = useGetPatientByIdQuery(PatientId, {
		skip: !isEditMode,
	})
	const navigate = useNavigate()
	const [dataForm, setDataForm] = useState({ ...emptyPatientData })
	const [createPatient, createState] = useCreatePatientMutation()
	const [editPatient, editState] = useEditPatientMutation()
	const isLoading =
		createState.isLoading ||
		editState.isLoading ||
		isPatientLoading
	const isError = createState.isError || editState.isError
	useEffect(() => {
		if (patient) {
			setDataForm({ ...emptyPatientData, ...patient })
		}
	}, [patient])

	const handleChange = (e) => {
		setDataForm({ ...dataForm, [e.target.name]: e.target.value })
	}

	const buttonLabel = id ? "Save" : "Add Patient"

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			if (isEditMode) {
				await editPatient({ id: PatientId, ...dataForm })
			} else {
				await createPatient(dataForm)
			}
			setDataForm({ ...emptyPatientData })
			navigate('/patients')
		} catch (error) {
			console.error("Failed to save patient", error)
		}
	}


	return (
		<div className={styles.container}>
			<h1>{isEditMode ? "Edit Patient" : "Add Patient"}</h1>
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
					<label htmlFor="birthDate" className={styles.label}>Birth Date:</label>
					<input
						type="date"
						id="birthDate"
						name="birthDate"
						className={styles.input}
						value={dataForm.birthDate}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="gender" className={styles.label}>Gender:</label>
					<select
						id="gender"
						name="gender"
						className={styles.select}
						value={dataForm.gender}
						onChange={handleChange}
					>
						<option value="">Select Gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
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
					<label htmlFor="address" className={styles.label}>Address:</label>
					<input
						type="text"
						id="address"
						name="address"
						className={styles.input}
						value={dataForm.address}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="notes" className={styles.label}>Notes:</label>
					<textarea
						id="notes"
						name="notes"
						className={styles.textarea}
						value={dataForm.notes}
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

export default PatientsForm;


//     "id": "p003",
//     "fullName": "Марія Коваль11",
//     "birthDate": "1978-01-12",
//     "gender": "female",
//     "phone": "+380674448899",
//     "email": "m.koval@gmail.com",
//     "address": "м. Харків, пр-т Науки, 22",
//     "notes": "Підвищений тиск"