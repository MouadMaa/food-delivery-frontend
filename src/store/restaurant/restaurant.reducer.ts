import { RestaurantAction, RestaurantState, SET_RESTAURANTS } from './restaurant.types'

const initState: RestaurantState = {
	restaurants: [],
}

const restaurantReducer = (state = initState, { type, payload }: RestaurantAction): RestaurantState => {
	switch (type) {
		case SET_RESTAURANTS:
			return { ...state, restaurants: payload }
		default:
			return state
	}
}

export default restaurantReducer
