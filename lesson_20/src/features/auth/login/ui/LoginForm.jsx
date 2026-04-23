import React, { useState } from 'react'
import { useLogin } from '../model/useLogin'
import { useNavigate } from 'react-router'
import styles from './LoginForm.module.css'
import { useTranslation } from 'react-i18next'
import Input from '@/shared/ui/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../model/loginSchema'

export default function LoginForm() {
  const { login, googleLogin, isLoading, error } = useLogin()
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (data) => {
    setErrorMessage('')
    try {
      await login(data)
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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>

      <Input
        type="email"
        placeholder={t('loginForm.emailPlaceholder')}
        {...register("email")}
        error={errors.email}
      />

      <Input
        type="password"
        placeholder={t('loginForm.passwordPlaceholder')}
        {...register("password")}
        error={errors.password}
      />

      <button
        type="submit"
        disabled={isSubmitting || isLoading}
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
        Google
      </button>

      {(error || errorMessage) && (
        <div className={styles.error}>
          {errorMessage || error?.data?.message}
        </div>
      )}
    </form>
  )
}
