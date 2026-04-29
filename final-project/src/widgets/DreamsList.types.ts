import type { ReactNode } from 'react'
import type { DreamItem } from '@/features/dream/edit/model/editApi.types'

export interface DreamsListProps {
	items: DreamItem[] | null | undefined
}

export type DreamCardActionElement = ReactNode
