import { useState } from 'react'
import styles from './MsgItem.module.css'
function MsgItem({ id, text, addLike, addDisLike }) {
	const [likesCount, setLikesCount] = useState(0);
	const [disLikesCount, setDisLikesCount] = useState(0);
	function onLike() {
		setLikesCount((prev) => prev + 1);
		addLike(id);
	}
	function onDisLike() {
		setDisLikesCount((prev) => prev + 1);
		addDisLike(id);
	}
	return (
		<div className={styles.list__item}>

			<span className={styles.msgText}>{text}</span>

			<button className={styles.button} onClick={onLike}>Like</button><span>{likesCount}</span>
			<button className={styles.button} onClick={onDisLike}>Dislike</button><span>{disLikesCount}</span>

		</div>
	)
}

export default MsgItem;