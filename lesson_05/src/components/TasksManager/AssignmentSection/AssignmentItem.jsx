import styles from './AssignmentItem.module.css';

function AssignmentItem({ id, title, onTaskDelete }) {
	return (
		<div className={styles.item}>
			<h4>{title}</h4>
			<button className={styles.button} onClick={() => onTaskDelete(id)}>X</button>
		</div>
	);
}

export default AssignmentItem;