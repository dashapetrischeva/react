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

        console.log('Post updated')
      } else {
        if (!title.trim()) return

        await addPost({
          title,
          body: 'Example post body',
          userId: 1,
        }).unwrap()

        console.log('Post added')
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
            {isEditMode ? 'Edit Post' : 'Add New Post'}
          </h4>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Title</label>
            <input
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="New post title"
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
                ? isEditMode
                  ? 'Updating...'
                  : 'Adding...'
                : isEditMode
                  ? 'Save'
                  : 'Add'}
            </button>
          </div>

          {isError && (
            <p className={styles.error}>Error</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default PostEditPage