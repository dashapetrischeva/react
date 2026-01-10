import { useParams } from "react-router";
import apiRoutes from "../../api/apiRoutes";
import useFetch from "../../hooks/useFetch";
import Loader from "../../../../lesson_07/src/components/Loader";
import styles from './TeachersDetail.module.css'

function TeachersDetail() {
	const { id } = useParams()
	const {
		data: teacher,
		isLoading,
		error,
	} = useFetch(apiRoutes.getTeacherById(id))
	return (
		<div>
			{!!isLoading && <Loader />}
			{!!error && <div>Error!</div>}
			{!!teacher && (
				<div className={styles.detailContainer}>
					<div className={styles.detailImage}>
						<img src={teacher.photo} alt="teacher" />
					</div>
					<div className={styles.detailInfo}>
						<h1>{teacher.name}</h1>
						<div className={styles.detailSubject}><span>Subject:</span> {teacher.subject}</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default TeachersDetail;