import { FC, Fragment } from 'react'
import { GetStaticProps } from 'next'

import Categories from '@/components/home/categories/categories.component'
import Restaurants from '@/components/home/restaurants/restaurants.component'
import { firestore } from '../firebase'
import { getCollectionData } from '../firebase/getDataFromCollectionOrDoc'
import { setCategories } from '../redux/category/category.actions'
import { initializeStore } from '../redux/store'
import { Category } from 'redux/category/category.types'
import { Restaurant } from 'redux/restaurant/restaurant.types'
import { setRestaurants } from 'redux/restaurant/restaurant.actions'

const Home: FC = () => {
	return (
		<Fragment>
			<Categories />
			<Restaurants />
		</Fragment>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const { dispatch, getState } = initializeStore()

	const categoriesResponse = await firestore.collection('categories').orderBy('order', 'asc').get()
	const categories = getCollectionData<Category>(categoriesResponse)

	const restaurantsResponse = await firestore.collection('restaurants').orderBy('favorites', 'desc').get()
	const restaurants = getCollectionData<Restaurant>(restaurantsResponse)

	dispatch(setCategories(categories))
	dispatch(setRestaurants(restaurants, categories))

	return {
		props: {
			initialReduxState: getState(),
		},
	}
}
