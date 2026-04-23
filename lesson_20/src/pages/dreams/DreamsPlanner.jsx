import { useGetListQuery } from '@/entities/dreamItem/model/itemApi'
import styles from './DreamsPlanner.module.css'
import AddDreamButton from '@/features/dream/add/ui/AddDreamButton'
import DreamsList from '@/widgets/DreamsList'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth'
import { useTranslation } from 'react-i18next'

function DreamsPlanner() {
	const user = useSelector(selectAuthUser)

	const {
		data: dreamsList,
		isLoading,
		isError,
	} = useGetListQuery(user?.uid, {
		skip: !user, // не делаем запрос пока нет user
	})


	const { t } = useTranslation()
	// если не залогинен
	if (!user) {
		return <div className={styles.plannerEmpty}>{t('dreams.loginRequired')}</div>
	}

	if (isLoading) {
		return <div className={styles.plannerEmpty}>{t('messages.loadingDreams')}</div>
	}

	if (isError) {
		return <div className={styles.plannerEmpty}>{t('messages.loadingError')}</div>
	}

	return (
		<div className={styles.plannerContainer}>
			<h1 className={styles.plannerTitle}>{t('dreams.title')}</h1>
			<AddDreamButton />
			<DreamsList items={dreamsList} />
		</div>
	)
}

export default DreamsPlanner


// import { useGetListQuery } from '@/entities/dreamItem/model/itemApi'
// import styles from './DreamsPlanner.module.css'
// import AddDreamButton from '@/features/dream/add/ui/AddDreamButton'
// import DreamsList from '@/widgets/DreamsList'

// function DreamsPlanner() {
// 	const { data: dreamsList, isLoading, isError } = useGetListQuery()

// 	if (isLoading) {
// 		return <div className={styles.plannerEmpty}>Loading dreams...</div>
// 	}

// 	if (isError) {
// 		return <div className={styles.plannerEmpty}>Error loading dreams. Try refreshing.</div>
// 	}

// 	return (
// 		<div className={styles.plannerContainer}>
// 			<h1 className={styles.plannerTitle}>Dreams Planner</h1>
// 			<AddDreamButton />
// 			<DreamsList items={dreamsList} />
// 		</div>
// 	)
// }

// export default DreamsPlanner
