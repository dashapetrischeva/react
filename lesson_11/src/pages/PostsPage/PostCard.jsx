import styles from './PostCard.module.css'

function PostCard({ post }) {
	return (
		<div className={styles.postCard}>
			<h2 className={styles.postTitle}>{post.title}</h2>
		</div>
	)
}

export default PostCard