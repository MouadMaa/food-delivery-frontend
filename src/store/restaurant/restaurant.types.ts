import { Category } from '@/store/category/category.types'

export interface Restaurant {
	id: string
	name: string
	favorites: number
	categories: Category[]
}

export interface RestaurantState {
	restaurants: Restaurant[]
}

export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS'

interface FetchRestaurantsAction {
	type: typeof FETCH_RESTAURANTS
	payload: Restaurant[]
}

export type RestaurantAction = FetchRestaurantsAction
