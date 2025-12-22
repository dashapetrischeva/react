import styles from './PostsManager.module.css'
import PostsList from './PostsList'
import { useState } from 'react'
function PostsManager({ postsList }) {
	const [posts, setPosts] = useState(postsList)

	function onLikeHandle(postId) {
		setPosts(prev =>
			prev.map(post =>
				post.id === postId
					? { ...post, likes: post.likes + 1 }
					: post
			)
		)
	}

	function onDislikeHandle(postId) {
		setPosts(prev =>
			prev.map(post =>
				post.id === postId
					? { ...post, likes: post.likes - 1 }
					: post
			)
		)
	}
	return (
		<div className={styles.postsManager}>
			<h1>Список постів</h1>
			<PostsList postsList={posts} onLike={onLikeHandle} onDislike={onDislikeHandle} />
		</div>
	);
}

export default PostsManager; 