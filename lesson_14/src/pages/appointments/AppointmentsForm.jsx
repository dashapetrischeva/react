import { useState, useEffect } from "react";
import styles from "./AppointmentsForm.module.css";
import { useNavigate, useParams } from "react-router";
import { useCreateAppointmentMutation, useGetAppointmentByIdQuery, useEditAppointmentMutation } from "@/api/slices/appointmentApi";
import { useGetPatientsQuery } from "@/api/slices/patientApi";
import { useGetDoctorsQuery } from "@/api/slices/doctorApi";
import { appointmentsStatuses } from "@/constants/appointmentsStatuses";



const emptyAppointmentData = {
	"patientId": "",
	"doctorId": "",
	"date": "",
	"reason": "",
	"status": ""
}

//  "patientId": "p018",
//  "doctorId": "d001",
//  "date": "2025-08-08T13:00:00Z",
//  "reason": "Кашель",
//  "status": "scheduled"

function AppointmentsForm() {
	const { id } = useParams()
	const { data: patients, error: patientError, isLoading: isPatientLoading } = useGetPatientsQuery()
	const { data: doctors, error: doctorError, isLoading: isDoctorLoading } = useGetDoctorsQuery()
	const navigate = useNavigate()
	const appointmentId = id
	const isEditMode = Boolean(appointmentId)
	const {
		data: appointment,
		isLoading: isAppointmentLoading,
	} = useGetAppointmentByIdQuery(appointmentId, {
		skip: !isEditMode,
	})

	const [dataForm, setDataForm] = useState({ ...emptyAppointmentData })
	const [createAppointment, createState] = useCreateAppointmentMutation()
	const [editAppointment, editState] = useEditAppointmentMutation()
	const isLoading =
		createState.isLoading ||
		editState.isLoading ||
		isAppointmentLoading ||
		isPatientLoading ||
		isDoctorLoading
	const isError =
		createState.isError ||
		editState.isError ||
		patientError ||
		doctorError
	useEffect(() => {
		if (appointment) {
			setDataForm({ ...emptyAppointmentData, ...appointment })
		}
	}, [appointment])
	const handleChange = (e) => {
		setDataForm({ ...dataForm, [e.target.name]: e.target.value })
	}
	const buttonLabel = id ? "Save" : "Add Appointment"
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			if (isEditMode) {
				await editAppointment({ id: appointmentId, ...dataForm })
			} else {
				await createAppointment(dataForm)
			}
			setDataForm({ ...emptyAppointmentData })
			navigate('/appointments')
		} catch (error) {
			console.error("Failed to save appointment", error)
		}
	}


	return (
		<div className={styles.container}>
			<h1>{isEditMode ? "Edit Appointment" : "Add Appointment"}</h1>
			{isLoading && <p>Loading...</p>}
			{isError && <p>Error loading data</p>}
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.formGroup}>
					<label htmlFor="patientId" className={styles.label}>Patient:</label>
					<select
						id="patientId"
						name="patientId"
						className={styles.input}
						value={dataForm.patientId}
						onChange={handleChange}
					>
						<option value="">Select a patient</option>
						{patients?.map((patient) => (
							<option key={patient.id} value={patient.id}>
								{patient.fullName}
							</option>
						))}
					</select>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="doctorId" className={styles.label}>Doctor:</label>
					<select
						id="doctorId"
						name="doctorId"
						className={styles.input}
						value={dataForm.doctorId}
						onChange={handleChange}
					>
						<option value="">Select a doctor</option>
						{doctors?.map((doctor) => (
							<option key={doctor.id} value={doctor.id}>
								{doctor.fullName}
							</option>
						))}
					</select>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="date" className={styles.label}>Date:</label>
					<input
						type="datetime-local"
						id="date"
						name="date"
						className={styles.input}
						value={dataForm.date}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="reason" className={styles.label}>Reason:</label>
					<input
						type="text"
						id="reason"
						name="reason"
						className={styles.input}
						value={dataForm.reason}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="status" className={styles.label}>Status:</label>
					<select
						id="status"
						name="status"
						className={styles.input}
						value={dataForm.status}
						onChange={handleChange}
					>
						<option value="">Select status</option>
						{appointmentsStatuses.map((status) => (
							<option key={status.id} value={status.id}>
								{status.label}
							</option>
						))}
					</select>
				</div>
				<div className={styles.buttonGroup}>
					<button type="submit" className={styles.submitButton}>{buttonLabel}</button>
				</div>
			</form>
		</div>
	);
}

export default AppointmentsForm;


