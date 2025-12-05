import { useState } from 'react'
import styles from "./KitchenOrders.module.css"
function KitchenOrders() {
	const [newOrder, setNewOrder] = useState('');
	const [waitingList, setWaitingList] = useState([]);
	const [processingList, setProcessingList] = useState([]);
	const [completedList, setCompletedList] = useState([]);
	function addOrder() {
		if (newOrder.trim() !== '') {
			const order = { id: Date.now(), title: newOrder.trim() };
			setWaitingList(prevList => [...prevList, order]);
			setNewOrder('');
		}
	}
	function onPrepareClickHandler(orderId) {
		const orderToPrepare = waitingList.find(order => order.id === orderId);
		if (orderToPrepare) {
			setWaitingList(prevList => prevList.filter(order => order.id !== orderId));
			setProcessingList(prevList => [...prevList, orderToPrepare]);
		}
	}
	function onCookedClickHandler(orderId) {
		const prepared = processingList.find(order => order.id === orderId);
		if (prepared) {
			setProcessingList(prevList => prevList.filter(order => order.id !== orderId));
			setCompletedList(prevList => [...prevList, prepared]);

		}
	}
	function onServedClickHandler(orderId) {
		setCompletedList(prevList => prevList.filter(order => order.id !== orderId))
	}
	return (
		<div>
			<h2>Задача 6</h2>
			<form action="#" method="GET" className={styles.form}>
				<div className={styles.form__field}>
					<label className={styles.field__label}>
						Нова замовлена страва
					</label>
					<input type="text"
						className={styles.field__input}
						value={newOrder}
						onChange={(e) => setNewOrder(e.target.value)} />
					<button type="button" onClick={addOrder}>Додати</button>
				</div>
			</form >

			<div className={styles.ordersLists}>
				<div className={styles.ordersLists__waiting}>
					<h3 className={styles.ordersLists__title}>Очікують на виконання</h3>
					<ul className={styles.ordersLists__list}>

						{waitingList.map((order) => (
							<li key={order.id}>{order.title} <button className={styles.buttonList} onClick={() => onPrepareClickHandler(order.id)}>Готувати</button></li>
						))}
					</ul>
				</div>
				<div className={styles.ordersLists__processing}>
					<h3 className={styles.ordersLists__title}>Виконуються</h3>
					<ul className={styles.ordersLists__list}>

						{processingList.map((order) => (
							<li key={order.id}>{order.title} <button className={styles.buttonList} onClick={() => onCookedClickHandler(order.id)}>Приготовлено</button></li>
						))}
					</ul>
				</div>
				<div className={styles.ordersLists__completed}>
					<h3 className={styles.ordersLists__title}>Готові до виносу</h3>
					<ul className={styles.ordersLists__list}>

						{completedList.map((order) => (
							<li key={order.id}>{order.title} <button className={styles.buttonList} onClick={() => onServedClickHandler(order.id)}>Подано</button></li>
						))}
					</ul>
				</div>
			</div>
		</div >
	);
}

export default KitchenOrders;

// Задача 6. Задача. На кухню поступають замовлення. Спочатку ми додаємо їх у список “Очікують на виконання”,
//  повар береться робити — замовлення переходить у список “Виконуються”,   якщо замовлення виконано — переходить у список “Готові до виносу”.
//  Якщо натиснути на “Подано” - страва зникає з таблиці

// waitingList, processingList, completedList