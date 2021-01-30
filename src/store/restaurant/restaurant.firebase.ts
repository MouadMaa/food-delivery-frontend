import { Dispatch } from 'redux'

import { db } from '@/firebase/firebase'
import { getCollectionData } from '@/firebase/firebase.utils'
import { Restaurant } from './restaurant.types'
import { fetchRestaurants } from './restaurant.actions'
import { populateRestaurantsWithCategories } from './restaurant.utils'

export const fetchRestaurantsAsync = () => async (dispatch: Dispatch) => {
	const restaurantsResponse = await db.collection('restaurants').orderBy('favorites', 'desc').get()
	const restaurants = getCollectionData<Restaurant>(restaurantsResponse)
	const newPopulatedRestaurants = await populateRestaurantsWithCategories(restaurants)
	dispatch(fetchRestaurants(newPopulatedRestaurants))
}
