import AssignmentItem from './AssignmentItem'
import styles from './AssignmentCard.module.css'
function AssignmentCard({ userId, userName, tasksList, onUserTaskDelete }) {
	function onTaskDelete(taskId) {
		onUserTaskDelete(userId, taskId);
	}
	return (
		<div className={styles.assignmentCard}>
			<h3>Виконавець {userName}</h3>
			{
				tasksList?.length > 0 ?
					(
						tasksList.map(task => (
							<AssignmentItem key={task.id} {...task} onTaskDelete={onTaskDelete} />
						))
					)
					: <div>Список задач порожній!</div>
			}
		</div>
	);
}

export default AssignmentCard;