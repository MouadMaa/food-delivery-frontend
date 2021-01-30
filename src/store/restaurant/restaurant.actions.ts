import { Restaurant, RestaurantAction, FETCH_RESTAURANTS } from './restaurant.types'

export const fetchRestaurants = (restaurants: Restaurant[]): RestaurantAction => ({
	type: FETCH_RESTAURANTS,
	payload: restaurants,
})
