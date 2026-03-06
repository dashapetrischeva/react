import { useGetPatientsQuery } from "@/api/slices/patientApi";
import PatientCard from "./PatientCard";
import { Link } from "react-router";
import styles from "./PatientsList.module.css";

function PatientsList() {
	const { data: patients, error, isLoading } = useGetPatientsQuery()
	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Patients List</h1>

			<Link to="/patients/new" className={styles.addLink}>Add New Patient</Link>

			<div className={styles.tableWrapper}>
				<table className={styles.table}>
					<tbody>
						<tr>
							<th>Full Name</th>
							<th>Birth Date</th>
							<th>Gender</th>
							<th>Phone</th>
							<th>Email</th>
							<th>Address</th>
							<th>Actions</th>

						</tr>
						{patients.map(patient => (
							<PatientCard key={patient.id} patient={patient} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default PatientsList;