import { TravelPlanningContext } from "@/context/TravelPlanningContext";
import { travelPlanningReducer } from "@/reducers/travelPlanningReducer";
import { useReducer } from "react";

function TravelPlanningProvider({ children }) {
	const [state, dispatch] = useReducer(travelPlanningReducer, {
		selectedBuses: [],
		selectedHotels: []
	});
	return (
		<TravelPlanningContext
			value={{
				selectedBuses: state.selectedBuses,
				selectedHotels: state.selectedHotels,
				dispatch
			}}
		>
			{children}
		</TravelPlanningContext>
	);
}

export default TravelPlanningProvider;