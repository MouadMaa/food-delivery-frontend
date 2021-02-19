import { db } from '@/firebase/firebase'
import { getCollectionData } from '@/firebase/firebase.utils'
import { Category } from '@/store/category/category.types'
import { Restaurant } from '@/store/restaurant/restaurant.types'

export const searchForCategories = async (value: string): Promise<Category[]> => {
	const searchTerm = capitalizeWords(value)
	const categoriesResponse = await db
		.collection('categories')
		.orderBy('name')
		.startAt(searchTerm)
		.endAt(searchTerm + '\uf8ff')
		.limit(5)
		.get()
	return getCollectionData<Category>(categoriesResponse)
}

export const searchForRestaurants = async (value: string): Promise<Restaurant[]> => {
	const searchTerm = capitalizeWords(value)
	const restaurantsResponse = await db
		.collection('restaurants')
		.orderBy('name')
		.startAt(searchTerm)
		.endAt(searchTerm + '\uf8ff')
		.limit(5)
		.get()
	return getCollectionData<Restaurant>(restaurantsResponse)
}

const capitalizeWords = (str: string) => {
	const words = str.split(' ')
	for (let i = 0; i < words.length; i++) words[i] = words[i][0].toUpperCase() + words[i].substr(1)
	return words.join(' ')
}
