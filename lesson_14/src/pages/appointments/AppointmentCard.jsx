import { useDeleteAppointmentMutation } from "@/api/slices/appointmentApi";
import styles from "./AppointmentCard.module.css";
import { Link } from "react-router";
import { useGetPatientByIdQuery } from "@/api/slices/patientApi";
import { useGetDoctorByIdQuery } from "@/api/slices/doctorApi";
function AppointmentCard({ appointment }) {
	const [deleteAppointment, { isLoading }] = useDeleteAppointmentMutation();

	// format ISO string to human readable date/time
	const formattedDate = appointment.date
		? new Date(appointment.date).toLocaleString("en-EN", {
			dateStyle: "medium",
			timeStyle: "short",
		})
		: "";


	const statusClass = appointment.status ? styles[appointment.status] : "";

	const {
		data: patient,
		isLoading: isPatientLoading,
	} = useGetPatientByIdQuery(appointment.patientId)

	const {
		data: doctor,
		isLoading: isDoctorLoading,
	} = useGetDoctorByIdQuery(appointment.doctorId)


	return (
		<tr>
			<td>{patient?.fullName}</td>
			<td>{doctor?.fullName}</td>
			<td>{formattedDate}</td>
			<td>{appointment.reason}</td>
			<td>
				<span className={`${styles.status} ${statusClass}`}> {appointment.status} </span>
			</td>
			<td>
				<Link to={`/appointments/${appointment.id}`} className={styles.actionButton}>✏️</Link>
				<button onClick={() => deleteAppointment(appointment.id)} className={styles.actionButton}>❌</button>
				{isLoading && <span>...</span>}
			</td>
		</tr>
	);
}

export default AppointmentCard;

//  "patientId": "p018",
//  "doctorId": "d001",
//  "date": "2025-08-08T13:00:00Z",
//  "reason": "Кашель",
//  "status":  active scheduled completed canceled