import styles from './PostsList.module.css'
import PostsItem from './PostsItem'
function PostLists({ postsList, onLike, onDislike }) {
	return (
		<div className={styles.postsList}>
			{
				postsList.map(post => (
					<PostsItem
						key={post.id}
						{...post}
						onLike={() => onLike(post.id)}
						onDislike={() => onDislike(post.id)}
					/>
				))
			}

		</div>
	);
}



export default PostLists;