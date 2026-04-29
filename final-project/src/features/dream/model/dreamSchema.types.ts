import type { InferType } from 'yup'
import { dreamSchema } from './dreamSchema'

export type DreamFormValues = InferType<typeof dreamSchema>
