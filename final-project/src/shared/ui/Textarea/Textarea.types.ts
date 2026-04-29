import type { FieldError } from 'react-hook-form'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: FieldError
}
