export type ItemFormValues = {
	description: string
	year: string
	friend: string
}

export type ItemFormErrors = Partial<Record<keyof ItemFormValues, string>>

export type UseItemFormProps = {
	initialValues?: ItemFormValues
	onSubmit: (values: ItemFormValues) => Promise<void> | void
}