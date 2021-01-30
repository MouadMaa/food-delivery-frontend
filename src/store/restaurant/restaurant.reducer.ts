import { RestaurantAction, RestaurantState, FETCH_RESTAURANTS } from './restaurant.types'

const initState: RestaurantState = {
	restaurants: [],
}

const restaurantReducer = (state = initState, { type, payload }: RestaurantAction): RestaurantState => {
	switch (type) {
		case FETCH_RESTAURANTS:
			return { ...state, restaurants: payload }
		default:
			return state
	}
}

export default restaurantReducer
