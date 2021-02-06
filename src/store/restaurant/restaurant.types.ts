import { Category } from '@/store/category/category.types'

export interface Restaurant {
	id: string
	name: string
	imageCover: string
	categories: Category[]
	favoritesCount: number
	duration: [number, number]
}

export interface SortRestaurants {
	name: string
	value: string
	sort: 'asc' | 'desc'
}

export interface RestaurantState {
	restaurants: Restaurant[]
	sortBy: SortRestaurants
}

export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS'
export const SORT_RESTAURANTS = 'SORT_RESTAURANTS'

interface FetchRestaurantsAction {
	type: typeof FETCH_RESTAURANTS
	payload: Restaurant[]
}

interface SortRestaurantsAction {
	type: typeof SORT_RESTAURANTS
	payload: SortRestaurants
}

export type RestaurantAction = FetchRestaurantsAction | SortRestaurantsAction
