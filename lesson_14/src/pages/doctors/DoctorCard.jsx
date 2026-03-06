import { useDeleteDoctorMutation } from "@/api/slices/doctorApi";
import styles from "./DoctorCard.module.css";
import { Link } from "react-router";
function DoctorCard({ doctor }) {
	const [deleteDoctor, { isLoading }] = useDeleteDoctorMutation()
	return (

		<tr>
			<td>{doctor.fullName}</td>
			<td>{doctor.specialty}</td>
			<td>{doctor.room}</td>
			<td>{doctor.phone}</td>
			<td>{doctor.email}</td>
			<td>{doctor.notes}</td>
			<td>
				<Link to={`/doctors/${doctor.id}`} className={styles.actionButton}>✏️</Link>
				<button onClick={() => deleteDoctor(doctor.id)} className={styles.actionButton}>❌</button>
				{isLoading && <span>...</span>}
			</td>
		</tr>

	);
}

export default DoctorCard;
