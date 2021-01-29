import { Restaurant, RestaurantAction, SET_RESTAURANTS } from './restaurant.types'

export const setRestaurants = (restaurants: Restaurant[]): RestaurantAction => ({
	type: SET_RESTAURANTS,
	payload: restaurants,
})
