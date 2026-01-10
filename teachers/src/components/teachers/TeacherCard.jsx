import { Link } from 'react-router';
import styles from './TeacherCard.module.css'
import frontRoutes from '../../routes/frontRoutes';
function TeacherCard({ teacher, onSelect, isSelected, deleteTeacher, isMeeting }) {
	return (
		<div className={styles.cardBlock}>
			<div className={styles.container}>
				<div className={styles.section1}>
					<img src={teacher.photo} alt="teacher" />
					<div>

						<Link to={frontRoutes.navigate.teachers.detail.replace(':id', teacher.id)} className={styles.cardLink}>	{teacher.name}</Link>
						<div>{teacher.subject}</div>
					</div>
				</div>
				<div className={styles.section2}>
					{
						onSelect ? <button onClick={() => onSelect(teacher.id)} className={styles.select}>
							{isSelected ? 'Selected' : 'Select'}
						</button> : null
					}
				</div>
			</div>
			{!isMeeting && (<div className={styles.buttons}>
				<Link to={frontRoutes.navigate.teachers.edit.replace(':id', teacher.id)} className={styles.edit}>Edit</Link>
				<button className={styles.delete} onClick={() => deleteTeacher(teacher.id)}>Delete</button>
			</div>)}
		</div>
	);
}

export default TeacherCard;