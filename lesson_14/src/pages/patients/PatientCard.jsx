import { useDeletePatientMutation } from "@/api/slices/patientApi";
import { Link, Routes } from "react-router";
import styles from "./PatientCard.module.css";

function PatientCard({ patient }) {
	const [deletePatient, { isLoading }] = useDeletePatientMutation()
	const genderImage = patient.gender === 'male' ? '👦🏻' : '👩🏻';
	return (

		<tr>
			<td>{patient.fullName}</td>
			<td>{patient.birthDate}</td>
			<td>{genderImage}</td>
			<td>{patient.phone}</td>
			<td>{patient.email}</td>
			<td>{patient.address}</td>
			<td>
				<Link to={`/patients/${patient.id}`} className={styles.actionButton}>✏️</Link>

				<button onClick={() => deletePatient(patient.id)} className={styles.actionButton}>❌</button>
				{isLoading && <span>...</span>}
			</td>
		</tr>

	);
}

export default PatientCard;

//     "id": "p003",
//     "fullName": "Марія Коваль11",
//     "birthDate": "1978-01-12",
//     "gender": "female",
//     "phone": "+380674448899",
//     "email": "m.koval@gmail.com",
//     "address": "м. Харків, пр-т Науки, 22",
//     "notes": "Підвищений тиск"