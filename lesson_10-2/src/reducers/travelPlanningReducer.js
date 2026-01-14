import { travelPlanningActions } from './travelPlanningActions';

export function travelPlanningReducer(state, action) {
	switch (action.type) {
		case travelPlanningActions.ADD_BUS:
			return {
				...state,
				selectedBuses: [...state.selectedBuses, action.payload]
			};

		case travelPlanningActions.REMOVE_BUS:
			return {
				...state,
				selectedBuses: state.selectedBuses.filter(
					id => id !== action.payload
				)
			};

		case travelPlanningActions.ADD_HOTEL:
			return {
				...state,
				selectedHotels: [...state.selectedHotels, action.payload]
			};

		case travelPlanningActions.REMOVE_HOTEL:
			return {
				...state,
				selectedHotels: state.selectedHotels.filter(
					id => id !== action.payload
				)
			};

		default:
			return state;
	}
}