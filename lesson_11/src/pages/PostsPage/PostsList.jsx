import styles from './PostsList.module.css'
import PostCard from './PostCard'

function PostsList({ posts }) {
	return (
		<>
			<h1>Posts</h1>
			<div className={styles.postsList}>

				{posts.length === 0 ? (
					<div>No posts available</div>
				) : (
					posts.map((post) => <PostCard key={post.id} post={post} />)
				)}
			</div>
		</>
	)
}

export default PostsList