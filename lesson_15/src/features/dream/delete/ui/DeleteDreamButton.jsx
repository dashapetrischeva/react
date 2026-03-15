import { useDeleteItemMutation } from "../model/deleteApi"
import styles from './DeleteDreamButton.module.css'

function DeleteDreamButton({ id }) {
	const [deleteItem, { isLoading }] = useDeleteItemMutation()
	const handleDelete = async () => {
		if (confirm('Are you sure you want to delete this item?')) {
			try {
				await deleteItem(id)
			} catch (error) {
				alert('Error deleting item!')
			}
		}
	}
	const buttonTitle = isLoading ? 'Deleting...' : 'Delete'
	return (
		<button
			className={styles.button}
			onClick={handleDelete}
			disabled={isLoading}
		>
			{buttonTitle}
		</button>
	);
}

export default DeleteDreamButton;