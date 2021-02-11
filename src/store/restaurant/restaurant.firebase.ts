import { db } from '@/firebase/firebase'
import { getCollectionData } from '@/firebase/firebase.utils'
import { Restaurant } from './restaurant.types'
import { populateRestaurantsWithCategories } from './restaurant.utils'
import { Category } from '../category/category.types'

export const fetchRestaurants = async (categories: Category[]): Promise<Restaurant[]> => {
	const restaurantsResponse = await db.collection('restaurants').orderBy('favoritesCount', 'desc').get()
	const restaurants = getCollectionData<Restaurant>(restaurantsResponse)
	return populateRestaurantsWithCategories(restaurants, categories)
}
