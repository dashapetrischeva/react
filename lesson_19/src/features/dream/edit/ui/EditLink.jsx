import { NavLink } from 'react-router'
import styles from './EditLink.module.css'
import { useTranslation } from 'react-i18next'

function EditLink({ id }) {
  const { t } = useTranslation()
  return (
    <NavLink to={`/dreams/${id}/edit`} className={styles.link}>
      {t('actions.edit')}
    </NavLink>
  )
}

export default EditLink
