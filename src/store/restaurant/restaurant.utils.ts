import { db } from '@/firebase/firebase'
import { getCollectionData } from '@/firebase/firebase.utils'
import { Category } from '../category/category.types'
import { Restaurant } from './restaurant.types'

export const populateRestaurantsWithCategories = async (restaurants: Restaurant[]): Promise<Restaurant[]> => {
	// Fetch Categories
	const categoriesResponse = await db.collection('categories').get()
	const categories = getCollectionData<Category>(categoriesResponse)

	// Replace restaurant categoriesIds with categories
	const newPopulatedRestaurants = restaurants.map((restaurant) => ({
		...restaurant,
		categories: (restaurant.categories as unknown[]).map((categoryId) => {
			return categories.find((category) => category.id === categoryId)
		}),
	}))

	return newPopulatedRestaurants
}
