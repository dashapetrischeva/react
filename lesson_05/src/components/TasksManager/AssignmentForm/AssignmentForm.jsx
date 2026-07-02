import TaskSelector from './TaskSelector'
import styles from './AssignmentForm.module.css'

function AssignmentForm({
	usersList,
	tasksList,
	assignments,
	onTaskAssignment,
}) {
	return (
		<div className={styles.taskDispatcher}>
			<h2>Task Assignment</h2>

			<div>
				{tasksList?.length > 0 ? (
					tasksList.map((task) => (
						<TaskSelector
							key={task.id}
							task={task}
							assignments={assignments}
							usersList={usersList}
							onTaskAssignment={onTaskAssignment}
						/>
					))
				) : (
					<div>Task list is empty</div>
				)}
			</div>
		</div>
	)
}

export default AssignmentForm