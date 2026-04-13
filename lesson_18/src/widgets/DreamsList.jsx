import DreamCard from '@/entities/dreamItem'

import styles from './DreamsList.module.css'
import DeleteDreamButton from '@/features/dream/delete/ui/DeleteDreamButton'
import EditLink from '@/features/dream/edit/ui/EditLink'
import { useTranslation } from 'react-i18next'


function DreamsList({ items }) {
	const { t } = useTranslation()
	if (!items || items.length === 0) {
		return <div className={styles.empty}>{t('dreams.empty')}</div>
	}

	return (
		<div className={styles.dreamListContainer}>
			<h1 className={styles.dreamListTitle}>{t('dreams.subtitle')}</h1>
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
