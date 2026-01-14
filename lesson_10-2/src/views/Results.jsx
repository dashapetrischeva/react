import { useContext } from "react";
import { TravelPlanningContext } from "@/context/TravelPlanningContext";
import { buses } from "@/data/buses";
import { hotels } from "@/data/hotels";
import ItemCard from "@/components/ItemCard";
import styles from "@/components/ItemCard.module.css";

function Results() {
	const { dispatch, selectedBuses, selectedHotels } = useContext(TravelPlanningContext);
	return (
		<div>
			<h1>Results</h1>

			<h2>Selected buses</h2>
			<div className={styles.list}>
				{selectedBuses.length > 0 ? (
					buses
						.filter(bus => selectedBuses.includes(bus.id))
						.map(bus => (
							<ItemCard
								key={bus.id}
								id={bus.id}
								title={bus.title}
								img={bus.img}
								type={bus.type}
								isBus
							/>
						))
				) : (
					<p>No buses selected</p>
				)}
			</div>





			<h2>Selected hotels</h2>
			<div className={styles.list}>
				{selectedHotels.length > 0 ? (

					hotels.filter(hotel => selectedHotels.includes(hotel.id))
						.map(hotel => (
							<ItemCard
								key={hotel.id}
								id={hotel.id}
								title={hotel.title}
								img={hotel.img}
								type={hotel.type}
								isBus={false}
							/>
						))

				) : (
					<p>No hotels selected</p>
				)}
			</div>


		</div>
	);
}

export default Results;