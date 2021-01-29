import { Category } from 'store/category/category.types'
import { Restaurant, RestaurantAction, SET_RESTAURANTS } from './restaurant.types'

export const setRestaurants = (restaurants: Restaurant[], categories: Category[]): RestaurantAction => ({
	type: SET_RESTAURANTS,
	payload: { restaurants, categories },
})
