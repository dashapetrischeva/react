import { useState } from 'react'
import MsgList from './MsgList';
import AddMsgForm from './AddMsgForm';
import styles from './Messenger.module.css'

function Messenger() {
	const [msgList, setMsgList] = useState(() => [])

	function addMsg(text) {
		setMsgList((prevMsg) => [...prevMsg, {
			id: Date.now(),
			text: text,
			likes: 0,
			disLikes: 0
		}]);
	}
	return (
		<div className={styles.messenger__container}>
			<AddMsgForm onAdd={addMsg} />
			<MsgList msgs={msgList} />
		</div>
	);
}

export default Messenger;