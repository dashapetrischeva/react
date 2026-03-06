import { useGetAppointmentsQuery } from "@/api/slices/appointmentApi";
import AppointmentCard from "./AppointmentCard";
import { Link } from "react-router";
import styles from "./AppointmentsList.module.css";

function AppointmentsList() {
	const { data: appointments, error, isLoading } = useGetAppointmentsQuery()
	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Appointments List</h1>

			<Link to="/appointments/new" className={styles.addLink}>Add New Appointment</Link>

			<div className={styles.tableWrapper}>
				<table className={styles.table}>
					<tbody>
						<tr>
							<th>Patient</th>
							<th>Doctor</th>
							<th>Date</th>
							<th>Reason</th>
							<th>Status</th>
							<th>Actions</th>

						</tr>
						{appointments.map(appointment => (
							<AppointmentCard key={appointment.id} appointment={appointment} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default AppointmentsList;



//  "patientId": "p018",
//  "doctorId": "d001",
//  "date": "2025-08-08T13:00:00Z",
//  "reason": "Кашель",
//  "status": "scheduled"
