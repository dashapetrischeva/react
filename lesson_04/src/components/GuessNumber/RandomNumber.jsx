
import styles from './RandomNumber.module.css'
function RandomNumber({ guessed }) {


	return (
		<div>
			<div className={styles['list-number']}>

				{guessed.map((num, i) => (
					<div
						key={i}
						className={styles['list-number__item']}>
						{num === null ? '?' : num}
					</div>
				))}
			</div>
		</div>


	);
}

export default RandomNumber;