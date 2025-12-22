import AssignmentCard from './AssignmentCard'
import styles from './AssignmentsSection.module.css'
function AssignmentsSection({ assignmentsList, onUserTaskDelete }) {
	if (!assignmentsList || assignmentsList.length === 0) {
		return null
	}
	return (
		<div>
			<h2>Список призначень</h2>
			<div className={styles.assignmentsList}>
				{

					assignmentsList.map((userAssignments, index) => (
						<AssignmentCard key={index}
							{...userAssignments}
							onUserTaskDelete={onUserTaskDelete}

						/>
					))

				}
			</div>
		</div >
	);
}

export default AssignmentsSection;