import styles from './TaskSelector.module.css'

function TaskSelector({ task, usersList, assignments, onTaskAssignment }) {
	const assignedUserId = Number(Object.entries(assignments).find(([userId, tasks]) =>
		tasks.includes(task.id))?.[0] || 0)
	function selectUser(e) {
		onTaskAssignment(task.id, Number(e.target.value))
	}
	const agUsersList = [{ id: 0, name: 'Виберіть користувача' }, ...usersList]
	return (
		<div className={styles.taskItem}>
			<div className={styles.taskName}>{task.title}</div>
			<select className={styles.select} onChange={selectUser} value={assignedUserId}>
				{
					agUsersList.map(user => (
						<option key={user.id} value={user.id} >{user.name}</option>
					))
				}
			</select>
		</div >

	);
}

export default TaskSelector;