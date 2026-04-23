import { useTranslation } from "react-i18next"
import { useDeleteItemMutation } from "../model/deleteApi"
import styles from './DeleteDreamButton.module.css'

function DeleteDreamButton({ id }) {
	const [deleteItem, { isLoading }] = useDeleteItemMutation()
	const { t } = useTranslation()
	const handleDelete = async () => {
		if (confirm(t('messages.confirmDelete'))) {
			try {
				await deleteItem(id)
			} catch (error) {
				alert(t('messages.deleteError'))
			}
		}
	}

	const buttonTitle = isLoading ? t('actions.deleting') : t('actions.delete')
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