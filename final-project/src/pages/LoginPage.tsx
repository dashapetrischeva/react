import { LoginForm } from '../features/auth/login'
import { SignUpForm } from '../features/auth/signup'
import { useState } from 'react'
import styles from './LoginPage.module.css'
import { useTranslation } from 'react-i18next'

export default function LoginPage() {
  const [showSignUp, setShowSignUp] = useState(false)
  const { t } = useTranslation()
  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {showSignUp ? t('loginPage.signupTitle') : t('loginPage.loginTitle')}
        </h1>
        {showSignUp ? (
          <SignUpForm onSuccess={() => setShowSignUp(false)} />
        ) : (
          <LoginForm />
        )}
        <button
          className={styles.toggleButton}
          type="button"
          onClick={() => setShowSignUp((v) => !v)}
        >
          {showSignUp ? t('loginPage.switchToLogin') : t('loginPage.switchToSignup')}
        </button>
      </div>
    </div>
  )
}
