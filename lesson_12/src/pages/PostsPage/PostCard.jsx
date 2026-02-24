import styles from './PostCard.module.css'
import { useDispatch } from 'react-redux'
import { deletePost } from '@/store/slices/postsThunk'
function PostCard({ post }) {
	const dispatch = useDispatch()
	const handleDelete = () => {
		dispatch(deletePost(post.id))
	}
	return (
		<div className={styles.postCard}>
			<div className={styles.cardFooter}>
				<h2 className={styles.postTitle}>{post.title}</h2>
				<button className={styles.delete} onClick={handleDelete}>❌</button>
			</div>
			<div className={styles.postBody}>{post.body}</div>
			<div className={styles.cardFooter}>
				<div className={styles.actions}>
					<div className={styles.likeBtn}>👍 {post.likesNumber}</div>
					<div className={styles.dislikeBtn}>👎 {post.dislikesNumber}</div>
				</div>
				<div className={styles.author}>{post.authorId}</div>
			</div>
		</div>
	)
}

export default PostCard