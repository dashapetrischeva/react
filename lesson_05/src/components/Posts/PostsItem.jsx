import styles from './PostsItem.module.css'
function PostsItem({
	userEmail,
	message,
	likes,
	userName,
	logo,
	onLike,
	onDislike
}) {
	return (
		<div className={styles.postsItem}>
			<div className={styles.itemLogo}>
				<img src={logo} alt="" />
			</div>
			<div className={styles.itemInfo}>
				<p><a href={userEmail}>{userName}</a></p>
				<p>{message}</p>
				<p className={styles.likes}><button onClick={onLike}><img src="/like.png" alt="like" /></button><span>{likes}</span><button onClick={onDislike}><img src="/dislike.png" alt="dislike" /></button></p>
			</div>
		</div>
	);
}

export default PostsItem;

