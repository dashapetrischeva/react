import { buses } from '@/data/buses.js'
import ItemCard from "@/components/ItemCard";
import styles from '@/components/ItemCard.module.css'

function Buses() {

	return (
		<div>
			<h1>Buses</h1>
			<div className={styles.list}>
				{buses.map(bus => (
					<ItemCard key={bus.id}
						id={bus.id}
						title={bus.title}
						img={bus.img}
						type={bus.type}
						isBus
					/>
				))}
			</div>

		</div>
	);
}

export default Buses;