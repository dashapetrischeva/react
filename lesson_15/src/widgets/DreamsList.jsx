import DreamCard from '@/entities/dreamItem'

import styles from './DreamsList.module.css'
import DeleteDreamButton from '@/features/dream/delete/ui/DeleteDreamButton'
import EditLink from '@/features/dream/edit/ui/EditLink'


function DreamsList({ items }) {
	if (!items || items.length === 0) {
		return <div className={styles.empty}>The dream list is empty.</div>
	}

	return (
		<div className={styles.dreamListContainer}>
			<h1 className={styles.dreamListTitle}>Dream List</h1>
			<div className={styles.cards}>
				{items.map((item) => (
					<DreamCard
						key={item.id}
						item={item}
						actions={[<DeleteDreamButton id={item.id} />, <EditLink id={item.id} />]}
					/>
				))}
			</div>
		</div>
	)
}

export default DreamsList
