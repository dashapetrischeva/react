import { Fragment } from "react";
import styles from "./DreamCard.module.css";

function DreamItem({ item, actions }) {
	return (
		<div className={styles.card}>
			<h2 className={styles.description}>{item.description}</h2>
			<div className={styles.row}>
				<span className={styles.tag}>{item.year}</span>
				<span className={styles.tag}>{item.friend}</span>
			</div>
			{!!actions && (
				<div className={styles.actions}>
					{actions.map((action, index) => (
						<Fragment key={index}>{action}</Fragment>
					))}
				</div>
			)}
		</div>
	)
}

export default DreamItem;