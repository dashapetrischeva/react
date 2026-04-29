import type { DreamFormValues } from '@/features/dream/model/dreamSchema.types'

export type DreamFormProps = {
	onSubmit: (data: DreamFormValues) => void | Promise<void>
	initialValues?: Partial<DreamFormValues> & { id?: string }
}