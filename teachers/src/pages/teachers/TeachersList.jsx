import { useEffect, useState } from "react"
import useTeachersApi from "../../hooks/useTeachersApi"
import TeacherCard from "../../components/teachers/TeacherCard"
import { useNavigate } from "react-router"
import frontRoutes from "../../routes/frontRoutes"
import styles from './TeachersList.module.css'
import apiRoutes from "../../api/apiRoutes"


function TeachersList() {
	const [selectedTeachersIdList, setSelectedTeachersIdList] = useState([])
	const navigate = useNavigate()

	const { data: teachersList, error, isLoading, fetchTeachers } = useTeachersApi()
	useEffect(() => {
		fetchTeachers()
	}, [fetchTeachers])

	const onSelect = (teacherId) => {
		if (selectedTeachersIdList.includes(teacherId))
			setSelectedTeachersIdList(prevList => prevList.filter(el => el !== teacherId))
		else
			setSelectedTeachersIdList(prevList => [...prevList, teacherId])
	}

	const goToMeetings = () => {
		const teachersListForMeetings = teachersList.filter(teacher => selectedTeachersIdList.includes(teacher.id))
		navigate(frontRoutes.navigate.meetings, {
			state: {
				teachersListForMeetings,
			},
		})
	}

	async function deleteTeacher(id) {
		const url = apiRoutes.deleteTeacher(id)
		await fetch(url, { method: 'DELETE' })
		navigate(frontRoutes.navigate.home)
	}

	let currentContent
	if (isLoading)
		currentContent = <div>Loading...</div>
	else if (error)
		currentContent = <div>{error.message || "Error occurred"}</div>
	else
		currentContent = <div>
			{
				teachersList.length === 0 ?
					<div>The list is empty</div>
					:
					<div>
						<div className={styles.buttons}>
							<button className={styles.addButton} onClick={() => { navigate(frontRoutes.navigate.teachers.add) }}>Add a new teacher</button>
							{!!selectedTeachersIdList.length && <button onClick={goToMeetings} className={styles.meetingButton}>{`Call ${selectedTeachersIdList.length} teachers to a meeting`}</button>}
						</div>

						{teachersList.map(teacher => (
							<TeacherCard key={teacher.id} teacher={teacher}
								onSelect={onSelect}
								isSelected={selectedTeachersIdList.includes(teacher.id)}
								deleteTeacher={deleteTeacher}
							/>
						))}
					</div>
			}
		</div>
	return (

		<div>
			<h1>List of teachers</h1>
			{currentContent}
		</div>
	);
}

export default TeachersList;