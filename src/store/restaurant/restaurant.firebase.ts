import { db } from '@/firebase/firebase'
import { getCollectionData } from '@/firebase/firebase.utils'
import { Restaurant } from './restaurant.types'
import { populateRestaurantsWithCategories } from './restaurant.utils'
import { Category } from '../category/category.types'

const RESTAURANTS_LIMIT = 3
let hasMoreRestaurants = true

export const fetchRestaurants = async (categories: Category[]): Promise<Restaurant[]> => {
	const restaurantsResponse = await db
		.collection('restaurants')
		.orderBy('favoritesCount', 'desc')
		.limit(RESTAURANTS_LIMIT)
		.get()

	const restaurants = getCollectionData<Restaurant>(restaurantsResponse)
	return populateRestaurantsWithCategories(restaurants, categories)
}

export const fetchMoreRestaurants = async (
	latestRestaurant: Restaurant,
	categories: Category[],
): Promise<Restaurant[]> => {
	if (!hasMoreRestaurants) return null

	const restaurantsResponse = await db
		.collection('restaurants')
		.orderBy('favoritesCount', 'desc')
		.startAfter(latestRestaurant.favoritesCount)
		.limit(RESTAURANTS_LIMIT)
		.get()

	if (restaurantsResponse.empty || restaurantsResponse.size !== RESTAURANTS_LIMIT) hasMoreRestaurants = false

	return populateRestaurantsWithCategories(getCollectionData<Restaurant>(restaurantsResponse), categories)
}
