import React, { useState } from 'react'
import { useLogin } from '../model/useLogin'
import { useNavigate } from 'react-router'
import styles from './LoginForm.module.css'
import { useTranslation } from 'react-i18next'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, googleLogin, isLoading, error } = useLogin()
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    try {
      await login({ email, password })
      navigate('/')
    } catch (err) {
      setErrorMessage(err?.message || t('loginForm.loginError'))
    }
  }

  const handleGoogle = async () => {
    setErrorMessage('')
    try {
      await googleLogin()
      navigate('/')
    } catch (err) {
      setErrorMessage(err?.message || t('loginForm.googleError'))
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.loginForm}>
      <input
        type="email"
        placeholder={t('loginForm.emailPlaceholder')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={styles.input}
      />
      <input
        type="password"
        placeholder={t('loginForm.passwordPlaceholder')}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className={styles.input}
      />
      <button
        type="submit"
        disabled={isLoading}
        className={styles.submitButton}
      >
        {t('loginForm.loginButton')}
      </button>
      <button
        type="button"
        onClick={handleGoogle}
        disabled={isLoading}
        className={styles.googleButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.googleIcon}
          viewBox="0 0 48 48"
        >
          <g>
            <path
              fill="#4285F4"
              d="M44.5 20H24v8.5h11.7C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.3 4.5 29.4 2.5 24 2.5 12.7 2.5 3.5 11.7 3.5 23S12.7 43.5 24 43.5c10.5 0 20-7.6 20-20 0-1.3-.1-2.1-.3-3.5z"
            />
            <path
              fill="#34A853"
              d="M6.3 14.7l7 5.1C15.1 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.3 4.5 29.4 2.5 24 2.5c-7.2 0-13 5.8-13 13 0 2.1.5 4.1 1.3 5.7z"
            />
            <path
              fill="#FBBC05"
              d="M24 43.5c6.1 0 11.2-2 15-5.5l-7-5.7c-2.1 1.5-4.8 2.4-8 2.4-6.1 0-11.3-4.1-13.1-9.6l-7 5.4C7.1 39.1 14.9 43.5 24 43.5z"
            />
            <path
              fill="#EA4335"
              d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.1 5.5-7.7 5.5-2.2 0-4.2-.7-5.7-2l-7 5.4C18.7 41.1 21.2 43.5 24 43.5c6.1 0 11.2-2 15-5.5l-7-5.7c-2.1 1.5-4.8 2.4-8 2.4-6.1 0-11.3-4.1-13.1-9.6l-7 5.4C7.1 39.1 14.9 43.5 24 43.5z"
            />
          </g>
        </svg>
        Google
      </button>
      {(error || errorMessage) && (
        <div className={styles.error}>
          {errorMessage || error?.data?.message || t('loginForm.loginError')}
        </div>
      )}
    </form>
  )
}
