import { RestaurantAction, RestaurantState, FETCH_RESTAURANTS, SORT_RESTAURANTS } from './restaurant.types'

const initState: RestaurantState = {
	restaurants: [],
	sortBy: {
		name: 'Popularity',
		value: 'favorites',
		sort: 'desc',
	},
}

const restaurantReducer = (state = initState, action: RestaurantAction): RestaurantState => {
	switch (action.type) {
		case FETCH_RESTAURANTS:
			return { ...state, restaurants: action.payload }
		case SORT_RESTAURANTS:
			return { ...state, sortBy: action.payload }
		default:
			return state
	}
}

export default restaurantReducer
