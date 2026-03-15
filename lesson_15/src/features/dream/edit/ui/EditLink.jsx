import { NavLink } from 'react-router'
import styles from './EditLink.module.css'

function EditLink({ id }) {
  return (
    <NavLink to={`/dreams/${id}/edit`} className={styles.link}>
      Edit
    </NavLink>
  )
}

export default EditLink
