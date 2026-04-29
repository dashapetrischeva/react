import type { ReactNode } from 'react'

export interface DreamCardItem {
	id: string
	description: string
	year: string
	friend: string
	[key: string]: any
}

export interface DreamCardProps {
	item: DreamCardItem
	actions?: ReactNode[]
}
