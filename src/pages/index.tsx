import { FC, Fragment } from 'react'
import { GetStaticProps } from 'next'

import Categories from '@/components/home/categories/categories.component'
import Restaurants from '@/components/home/restaurants/restaurants.component'
import { firestore } from '../firebase'
import { getCollectionData } from '../firebase/getDataFromCollectionOrDoc'
import { setCategories } from '../store/category/category.actions'
import { Category } from 'store/category/category.types'
import { Restaurant } from 'store/restaurant/restaurant.types'
import { setRestaurants } from 'store/restaurant/restaurant.actions'
import { storeWrapper } from 'store/store'

const Home: FC = () => {
	return (
		<Fragment>
			<Categories />
			<Restaurants />
		</Fragment>
	)
}

export default Home

export const getStaticProps: GetStaticProps = storeWrapper.getStaticProps(async ({ store }) => {
	const categoriesResponse = await firestore.collection('categories').orderBy('order', 'asc').get()
	const categories = getCollectionData<Category>(categoriesResponse)

	const restaurantsResponse = await firestore.collection('restaurants').orderBy('favorites', 'desc').get()
	const restaurants = getCollectionData<Restaurant>(restaurantsResponse)

	store.dispatch(setCategories(categories))
	store.dispatch(setRestaurants(restaurants, categories))
})
