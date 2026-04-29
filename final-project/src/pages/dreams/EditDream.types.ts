import type { User } from '@/features/auth/api/authApi.types'
import type { DreamItem } from '@/features/dream/edit/model/editApi.types'

export interface EditDreamState {
	id: string | undefined
	user: User | null
	item: DreamItem | undefined
	isLoading: boolean
	isSaving: boolean
	isAdding: boolean
	isEdit: boolean
}