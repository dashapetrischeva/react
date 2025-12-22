import { useState } from 'react'

import AssignmentForm from './AssignmentForm/AssignmentForm'
import AssignmentsSection from './AssignmentSection/AssignmentsSection';
import styles from './TaskManager.module.css'
function TaskManager({ usersList, tasksList }) {
	const [assignments, setAssignments] = useState(() => ({}))
	const assignmentsList = getAssignmentsList()


	function getAssignmentsObject(userId, usersTasksIds) {
		const user = usersList.find(item => item.id == userId)

		const userTasksList = usersTasksIds.map(taskId => {
			return tasksList.find(item => item.id === taskId)
		})
		return {
			userId: user.id,
			userName: user.name,
			tasksList: userTasksList
		}
	}



	function getAssignmentsList() {
		return Object.keys(assignments).map(userId => getAssignmentsObject(userId, assignments[userId]))
	}



	function onTaskAssignment(taskId, newUserId) {
		setAssignments(prev => ({
			...Object.fromEntries(
				Object.entries(prev).map(([userId, tasks]) => [
					userId,
					tasks.includes(taskId) ? tasks.filter(id => id !== taskId) : tasks
				])
			),
			[newUserId]: [...((prev[newUserId] || []).filter(id => id !== taskId)), taskId]
		}))
	}




	function onUserTaskDelete(userId, taskId) {
		setAssignments((prevAssignments) => ({
			...prevAssignments,
			[userId]: prevAssignments[userId].filter((id) => id !== taskId),
		}))
	}


	return (
		<div className={styles.main}>
			<h1>Менеджер задач</h1>
			<AssignmentForm
				usersList={usersList}
				tasksList={tasksList}
				assignments={assignments}
				onTaskAssignment={onTaskAssignment}
			/>

			<AssignmentsSection
				assignmentsList={assignmentsList}
				onUserTaskDelete={onUserTaskDelete}
			/>
		</div>
	);
}

export default TaskManager;