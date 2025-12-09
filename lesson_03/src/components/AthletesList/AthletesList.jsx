import { useState } from 'react';
import styles from './AthletesList.module.css'
function AthletesList() {
	const [generalList, setGeneralList] = useState([
		'Артем Коваленко',
		'Богдан Савчук',
		'Олександр Петренко',
		'Ірина Шевчук',
		'Марина Ткаченко',
		'Віталій Гриценко'
	])
	const [selectedList, setSelectedList] = useState([])
	function generalListClickHandler(el) {
		setGeneralList(prev => prev.filter(item => item !== el));
		setSelectedList(prev => [...prev, el])
	}
	function selectedListClickHandler(el) {
		setSelectedList(prev => prev.filter(item => item !== el));
		setGeneralList(prev => [...prev, el])
	}

	return (
		<section>
			<h2>Задача 5</h2>
			<div className={styles['athletes-lists']}>
				<div className={styles['athletes-lists__general']}>
					<h3 className={styles["athletes-lists__title"]}>Загальний список</h3>
					<ul className={styles["athletes-lists__list"]}>
						{generalList.map((el) =>
						(<li key={el} className={styles["athletes-lists__item"]} onClick={() => generalListClickHandler(el)}>{el}</li>
						))}
					</ul>
				</div>
				<div className={styles["athletes-lists__selected"]}>
					<h3 className={styles["athletes-lists__title"]}>Обрані для змагання</h3>
					<ul className={styles["athletes-lists__list"]}>
						{selectedList.map((el) =>
						(<li key={el} className={styles["athletes-lists__item"]} onClick={() => selectedListClickHandler(el)}>{el}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default AthletesList;

