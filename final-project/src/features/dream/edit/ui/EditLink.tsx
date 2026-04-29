import { NavLink } from 'react-router'
import styles from './EditLink.module.css'
import { useTranslation } from 'react-i18next'
import type { EditLinkProps } from './EditLink.types'

function EditLink({ id }: EditLinkProps) {
  const { t } = useTranslation()

  return (
    <NavLink to={`/dreams/${id}/edit`} className={styles.link}>
      {t('actions.edit')}
    </NavLink>
  )
}

export default EditLink
