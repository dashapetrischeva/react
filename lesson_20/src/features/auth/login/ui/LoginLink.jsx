import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

export function LoginLink({ className, style }) {
  const { t } = useTranslation()
  return (
    <Link to="/login" className={className} style={style}>
      {t('auth.loginLink')}
    </Link>
  )
}
