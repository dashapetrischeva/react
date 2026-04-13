import { useParams, useNavigate } from 'react-router'
import {
	useEditItemMutation,
	useGetItemQuery,
} from '@/features/dream/edit/model/editApi'
import { useAddItemMutation } from '@/features/dream/add/model/addApi'

import styles from './EditDream.module.css'
import DreamForm from '@/shared/components/DreamForm/ui/DreamForm'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth'
import { useTranslation } from 'react-i18next'

function EditDream() {
	const { id } = useParams()
	const navigate = useNavigate()
	const user = useSelector(selectAuthUser)
	const { data: item, isLoading } = useGetItemQuery(id, { skip: !id })
	const [editItem, { isLoading: isSaving }] = useEditItemMutation()
	const [addItem, { isLoading: isAdding }] = useAddItemMutation()

	const isEdit = !!id

	const { t } = useTranslation()
	if (isLoading || isSaving || isAdding) return <div className={styles.status}>{t('common.loading')}</div>
	if (isEdit && !item) return <div className={styles.status}>{t('editDream.notFound')}</div>

	const handleSubmit = async (values) => {
		if (!user?.uid) {
			console.error('User not found')
			return
		}

		if (isEdit) {
			await editItem({ id, data: values })
		} else {
			await addItem({
				item: values,
				userId: user.uid,
			})
		}
		navigate('/dreams')
	}

	return (
		<div className={styles.editDreamContainer}>
			<h1 className={styles.editDreamTitle}>
				{isEdit ? t('editDream.titleEdit') : t('editDream.titleCreate')}
			</h1>
			<DreamForm
				initialValues={item || { description: '', year: '', friend: '' }}
				onSubmit={handleSubmit}
			/>
		</div>
	)
}

export default EditDream