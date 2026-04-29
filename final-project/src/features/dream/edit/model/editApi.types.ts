export interface DreamItemData {
	description: string
	year: number
	friend?: string
}

export interface EditItemParams {
	id: string
	data: DreamItemData
}

export interface DreamItem extends DreamItemData {
	id: string
}
