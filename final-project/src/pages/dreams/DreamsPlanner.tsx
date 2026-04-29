import { useGetListQuery } from '@/entities/dreamItem'
import styles from './DreamsPlanner.module.css'
import AddDreamButton from '@/features/dream/add/ui/AddDreamButton'
import DreamsList from '@/widgets/DreamsList'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth'
import { useTranslation } from 'react-i18next'
import { SearchInput } from '@/features/dream/search/ui/SearchInput'
import { useSearch } from '@/features/dream/search/model/useSearch'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '@/features/auth'

function DreamsPlanner() {
	const dispatch = useDispatch()
	const user = useSelector(selectAuthUser)

	useEffect(() => {
		// For testing purposes, set user from localStorage
		const authUser = localStorage.getItem('authUser')
		if (authUser && !user) {
			try {
				const parsed = JSON.parse(authUser)
				dispatch(setUser({ user: parsed }))
			} catch (e) {
				console.error('Failed to parse authUser', e)
			}
		}
	}, [dispatch, user])

	const {
		data: dreamsList,
		isLoading,
		isError,
	} = useGetListQuery(user?.uid, {
		skip: !user, // не делаем запрос пока нет user
	})

	const { query, setQuery, filteredItems } = useSearch(
		dreamsList?.data || [],
		'description'
	)

	const { t } = useTranslation()
	// если не залогинен
	if (!user) {
		return <div className={styles.plannerEmpty}>{t('dreams.loginRequired')}</div>
	}

	if (isLoading) {
		return <div className={styles.plannerEmpty}>{t('messages.loadingDreams')}</div>
	}

	if (isError) {
		return (
			<div className={styles.plannerContainer}>
				<h1 className={styles.plannerTitle}>{t('dreams.title')}</h1>
				<SearchInput value={''} onChange={() => {}} />
				<div className={styles.plannerEmpty}>{t('messages.loadingError')}</div>
			</div>
		)
	}

	return (
		<div className={styles.plannerContainer}>
			<h1 className={styles.plannerTitle}>{t('dreams.title')}</h1>
			<AddDreamButton />
			<SearchInput value={query} onChange={setQuery} />

			<DreamsList items={filteredItems} />
		</div>
	)
}

export default DreamsPlanner

