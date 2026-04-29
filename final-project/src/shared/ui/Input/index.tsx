import { useTranslation } from 'react-i18next'
import styles from './Input.module.css'
import type { InputProps } from './Input.types'

export default function Input({ label, error, className, ...rest }: InputProps) {
  const { t } = useTranslation()

  return (
    <div>
      {label && <label className={styles.label}>{label}</label>}
      <input
        {...rest}
        className={`${styles.input}${className ? ` ${className}` : ''}`}
      />
      {error?.message && (
        <div className={styles.error}>{t(error.message)}</div>
      )}
    </div>
  )
}
