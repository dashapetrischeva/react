import { useGetDoctorsQuery } from "@/api/slices/doctorApi";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router";
import styles from "./DoctorsList.module.css";

function DoctorsList() {
	const { data: doctors, error, isLoading } = useGetDoctorsQuery()
	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Doctors List</h1>

			<Link to="/doctors/new" className={styles.addLink}>Add New Doctor</Link>

			<div className={styles.tableWrapper}>
				<table className={styles.table}>
					<tbody>
						<tr>
							<th>Full Name</th>
							<th>Specialty</th>
							<th>Room</th>
							<th>Phone</th>
							<th>Email</th>
							<th>Info</th>
							<th>Actions</th>

						</tr>
						{doctors.map(doctor => (
							<DoctorCard key={doctor.id} doctor={doctor} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default DoctorsList;

//  "id": "d001",
//  "fullName": "Олена Ковальчук",
//  "specialty": "Терапевт",
//  "email": "olena.kov@example.com",
//  "phone": "+380501112233",
//  "room": "101",
//  "notes": "Працює з 09:00 до 15:00"