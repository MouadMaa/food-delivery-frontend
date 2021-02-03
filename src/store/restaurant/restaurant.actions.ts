import { Restaurant, SortRestaurants, RestaurantAction, FETCH_RESTAURANTS, SORT_RESTAURANTS } from './restaurant.types'

export const fetchRestaurants = (restaurants: Restaurant[]): RestaurantAction => ({
	type: FETCH_RESTAURANTS,
	payload: restaurants,
})

export const sortRestaurants = (sortBy: SortRestaurants): RestaurantAction => ({
	type: SORT_RESTAURANTS,
	payload: sortBy,
})
