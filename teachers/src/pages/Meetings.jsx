import { useLocation } from "react-router";
import TeacherCard from "../components/teachers/TeacherCard";
import styles from './Meetings.module.css'
function Meetings() {
	const { state } = useLocation()
	const teachersListForMeetings = state?.teachersListForMeetings
	return (
		<div className={styles.meetingContainer}>
			<h1>Meeting participants</h1>
			{
				teachersListForMeetings?.length ? (
					<div>
						{teachersListForMeetings.map(teacher => (
							<TeacherCard key={teacher.id} teacher={teacher} isMeeting />
						))}
					</div>
				) : (
					<div>No teacher list specified</div>
				)
			}
		</div>
	);
}

export default Meetings;