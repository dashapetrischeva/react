import TaskSelector from './TaskSelector'
import styles from './AssignmentForm.module.css'
function AssignmentForm({ usersList, tasksList, assignments, onTaskAssignment }) {
	return (
		<div className={styles.taskDispatcher}>
			<h2>Розподілювач задач</h2>
			<div>
				{
					tasksList?.length > 0 ? (
						tasksList.map(task => (
							<TaskSelector
								key={task.id}
								task={task}
								assignments={assignments}
								usersList={usersList}
								onTaskAssignment={onTaskAssignment}
							/>
						))
					) :
						<div>Список задач порожній</div>
				}
			</div>
		</div>
	);
}

export default AssignmentForm;