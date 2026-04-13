import { useState } from 'react'
import { useSignUp } from '../model/useSignUp'
import { useNavigate } from 'react-router'
import styles from './SignUpForm.module.css'
import { useTranslation } from 'react-i18next'

export default function SignUpForm({ onSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signUp, isLoading, error } = useSignUp()
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const { t } = useTranslation()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    try {
      await signUp({ email, password, displayName })
      onSuccess && onSuccess()
      navigate('/')
    } catch (err) {
      setErrorMessage(err?.message || t('signupForm.signupError'))
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.signUpForm}>
      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder={t('signUpForm.namePlaceholder')}
        required
        className={styles.input}
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('signUpForm.emailPlaceholder')}
        required
        type="email"
        className={styles.input}
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={t('signUpForm.passwordPlaceholder')}
        type="password"
        required
        className={styles.input}
      />
      <button
        type="submit"
        disabled={isLoading}
        className={styles.submitButton}
      >
        {t('signUpForm.submitButton')}
      </button>
      {(error || errorMessage) && (
        <div className={styles.error}>
          {errorMessage || error?.data?.message || t('signUpForm.signupError')}
        </div>
      )}
    </form>
  )
}
