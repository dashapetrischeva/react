import { useGetListQuery } from '@/entities/dreamItem/model/itemApi'
import styles from './DreamsPlanner.module.css'
import AddDreamButton from '@/features/dream/add/ui/AddDreamButton'
import DreamsList from '@/widgets/DreamsList'

function DreamsPlanner() {
	const { data: dreamsList, isLoading, isError } = useGetListQuery()

	if (isLoading) {
		return <div className={styles.plannerEmpty}>Loading dreams...</div>
	}

	if (isError) {
		return <div className={styles.plannerEmpty}>Error loading dreams. Try refreshing.</div>
	}

	return (
		<div className={styles.plannerContainer}>
			<h1 className={styles.plannerTitle}>Dreams Planner</h1>
			<AddDreamButton />
			<DreamsList items={dreamsList} />
		</div>
	)
}

export default DreamsPlanner
