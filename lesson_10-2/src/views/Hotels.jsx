import { hotels } from '@/data/hotels.js'
import ItemCard from "@/components/ItemCard";
import styles from '@/components/ItemCard.module.css'

function Hotels() {

	return (
		<div>
			<h1>Hotels</h1>
			<div className={styles.list}>
				{hotels.map(hotel => (
					<ItemCard key={hotel.id}
						id={hotel.id}
						title={hotel.title}
						img={hotel.img}
						type={hotel.type}
					/>
				))}
			</div>

		</div>
	);
}

export default Hotels;