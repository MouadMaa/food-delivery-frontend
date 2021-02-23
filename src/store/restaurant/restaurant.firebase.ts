import { db } from '@/firebase/firebase'
import { getCollectionData } from '@/firebase/firebase.utils'
import { Restaurant } from './restaurant.types'
import { populateRestaurantsWithCategories } from './restaurant.utils'
import { Category } from '../category/category.types'

const RESTAURANTS_LIMIT = 12
let hasMoreRestaurants = true

export const fetchRestaurants = async (categories?: Category[]): Promise<Restaurant[]> => {
	const restaurantsResponse = await db
		.collection('restaurants')
		.orderBy('favoritesCount', 'desc')
		.limit(RESTAURANTS_LIMIT)
		.get()

	const restaurants = getCollectionData<Restaurant>(restaurantsResponse)

	return categories ? populateRestaurantsWithCategories(restaurants, categories) : restaurants
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

		const restaurants = getCollectionData<Restaurant>(restaurantsResponse)

		return populateRestaurantsWithCategories(restaurants, categories)
	}

export const fetchRestaurant = async (slug: string): Promise<Restaurant> => {
	const res = await db.collection('restaurants').where('slug', '==', slug).get()
	const restaurant = getCollectionData<Restaurant>(res)[0]
	return restaurant
}
