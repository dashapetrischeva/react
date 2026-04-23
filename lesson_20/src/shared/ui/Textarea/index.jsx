import styles from './Textarea.module.css'
import { useTranslation } from 'react-i18next'
const Textarea = ({ label, error, ...rest }) => {
  const { t } = useTranslation()
  return (
    <div>
      {label && (
        <label className={styles.label}>{label}</label>
      )}
      <textarea
        className={styles.textarea}
        {...rest}
      />
      {!!error && (<div className={styles.error}> {t(error.message)}</div>)}
    </div>
  )
}

export default Textarea
