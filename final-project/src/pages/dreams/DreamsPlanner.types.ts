import type { User } from '@/features/auth/api/authApi.types'
import type { DreamItem } from '@/entities/dreamItem/model/itemApi.types'

export interface DreamsPlannerState {
	user: User | null
	dreamsList: DreamItem[] | undefined
	isLoading: boolean
	isError: boolean
	query: string
	setQuery: (value: string) => void
	filteredItems: DreamItem[]
}