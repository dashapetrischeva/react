import { useParams, useNavigate } from 'react-router'
import {
	useEditItemMutation,
	useGetItemQuery,
} from '@/features/dream/edit/model/editApi'
import { useAddItemMutation } from '@/features/dream/add/model/addApi'

import styles from './EditDream.module.css'
import DreamForm from '@/shared/components/DreamForm/ui/DreamForm'

function EditDream() {
	const { id } = useParams()
	const navigate = useNavigate()

	const { data: item, isLoading } = useGetItemQuery(id, { skip: !id })
	const [editItem, { isLoading: isSaving }] = useEditItemMutation()
	const [addItem, { isLoading: isAdding }] = useAddItemMutation()

	const isEdit = !!id

	if (isLoading || isSaving || isAdding) return <div className={styles.status}>Loading...</div>
	if (isEdit && !item) return <div className={styles.status}>Dream not found</div>

	const handleSubmit = async (values) => {
		if (isEdit) {
			await editItem({ id, data: values })
		} else {
			await addItem(values)
		}
		navigate('/dreams')
	}

	return (
		<div className={styles.editDreamContainer}>
			<h1 className={styles.editDreamTitle}>
				{isEdit ? 'Edit dream' : 'Create new dream'}
			</h1>
			<DreamForm
				initialValues={item || { description: '', year: '', friend: '' }}
				onSubmit={handleSubmit}
			/>
		</div>
	)
}

export default EditDream