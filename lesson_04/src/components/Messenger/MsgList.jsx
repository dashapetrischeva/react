import MsgItem from './MsgItem'
import styles from './MsgList.module.css'
function MsgList({ msgs, addLike, addDislike }) {
	return (
		<div className={styles.container}>
			{msgs?.length > 0 ? (
				msgs.map((msg) => (
					<MsgItem
						key={msg.id}
						{...msg}
						addLike={addLike}
						addDisLike={addDislike}
					/>
				))
			) : (
				<div>No messages</div>
			)}
		</div>
	)
}

export default MsgList;