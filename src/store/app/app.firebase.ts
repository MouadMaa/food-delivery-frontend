import { Dispatch } from 'redux'

import { db } from '@/firebase/firebase'
import { getCollectionData } from '@/firebase/firebase.utils'
import { Category } from '../category/category.types'
import { Restaurant } from '../restaurant/restaurant.types'

export const searchForCategoriesAndRestaurantsAsync = (value: string) => async (dispatch: Dispatch) => {
	const categoriesResponse = await db
		.collection('categories')
		.orderBy('name')
		.startAt(value)
		.endAt(value + '\uf8ff')
		.limit(5)
		.get()
	const categories = getCollectionData<Category>(categoriesResponse)
	const restaurantsResponse = await db
		.collection('restaurants')
		.orderBy('name')
		.startAt(value)
		.endAt(value + '\uf8ff')
		.limit(5)
		.get()
	const restaurants = getCollectionData<Restaurant>(restaurantsResponse)
	console.log('------------------------------------------------------------------------')
	console.log(categories)
	console.log(restaurants)
	console.log('------------------------------------------------------------------------')

	// dispatch()
}
