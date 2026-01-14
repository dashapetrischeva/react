import { travelPlanningActions } from '@/reducers/travelPlanningActions';
import styles from './ItemCard.module.css'
import { TravelPlanningContext } from '@/context/TravelPlanningContext';
import { useContext } from 'react';

function ItemCard({ id, title, img, type, isBus }) {
	const { dispatch, selectedBuses, selectedHotels } = useContext(TravelPlanningContext);
	const buttonLabel = isBus ? (selectedBuses.includes(id) ? 'Selected' : 'Select') : (selectedHotels.includes(id) ? 'Selected' : 'Select');
	function handleClick() {
		if (isBus) {
			if (selectedBuses.includes(id)) {
				dispatch({ type: travelPlanningActions.REMOVE_BUS, payload: id });
			} else {
				dispatch({ type: travelPlanningActions.ADD_BUS, payload: id });
			}
		} else {
			if (selectedHotels.includes(id)) {
				dispatch({ type: travelPlanningActions.REMOVE_HOTEL, payload: id });
			} else {
				dispatch({ type: travelPlanningActions.ADD_HOTEL, payload: id });
			}
		}
	}
	return (
		<div className={styles.itemCard}>
			<div className={styles.imageWrap}>
				<img src={img} alt={title} className={styles.image} />
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.type}>{type}</p>
				<button onClick={handleClick} className={styles.button}>{buttonLabel}</button>
			</div>
		</div>
	);
}

export default ItemCard;