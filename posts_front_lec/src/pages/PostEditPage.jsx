import { useState, useEffect } from 'react'
import {
  useAddPostMutation,
  useEditPostMutation,
  useGetPostByIdQuery,
} from '../api/postsApi'
import styles from './PostEditPage.module.css'
import { useNavigate, useParams } from 'react-router'
function PostEditPage() {

  const { id } = useParams()
  const postId = id
  const isEditMode = Boolean(postId)

  const [title, setTitle] = useState('')

  const {
    data: post,
    isLoading: isPostLoading,
  } = useGetPostByIdQuery(postId, {
    skip: !isEditMode,
  })
  const navigate = useNavigate()
  const [addPost, addState] = useAddPostMutation()
  const [editPost, editState] = useEditPostMutation()

  const isLoading =
    addState.isLoading ||
    editState.isLoading ||
    isPostLoading

  const isError = addState.isError || editState.isError


  useEffect(() => {
    if (post) {
      setTitle(post.title)
    }
  }, [post])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (isEditMode) {
        await editPost({
          id: postId,
          title,
        }).unwrap()

        console.log('Пост відредаговано')
      } else {
        if (!title.trim()) return
        await addPost({
          title,
          body: 'Приклад тіла поста',
          userId: 1,
        }).unwrap()

        console.log('Пост додано')
        setTitle('')
      }
      navigate('/posts')

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h4 className={styles.title}>
            {isEditMode ? 'Редагувати пост' : 'Додати новий пост'}
          </h4>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>

          <div className={styles.field}>
            <label className={styles.label}>Заголовок</label>
            <input
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Заголовок нового поста"
              disabled={isLoading}
            />
          </div>

          <div className={styles.actions}>

            <button
              type="submit"
              className={`${styles.btn} ${styles.btnPrimary}`}
              disabled={isLoading}
            >
              {isLoading
                ? (isEditMode ? 'Редагуємо...' : 'Додаємо...')
                : (isEditMode ? 'Зберегти' : 'Додати')}
            </button>
          </div>

          {isError && (
            <p className={styles.error}>Помилка</p>
          )}

        </form>
      </div>
    </div>
  )
}

export default PostEditPage