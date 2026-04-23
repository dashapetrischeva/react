import styles from './Input.module.css'
import { useTranslation } from 'react-i18next'
function Input({ label, error, ...rest }) {
  const { t } = useTranslation()
  return (<div>

    {label && (
      <label className={styles.label}>{label}</label>
    )}
    <input {...rest} className={styles.input} />
    {!!error && (<div className={styles.error}> {t(error.message)}</div>)}
  </div>);
}

export default Input;
