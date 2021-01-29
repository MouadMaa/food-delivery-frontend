import { FC, Fragment } from 'react'
import { GetStaticProps } from 'next'

import Categories from '@/components/home/categories/categories.component'
import Restaurants from '@/components/home/restaurants/restaurants.component'
import { db } from '@/firebase/firebase'
import { getCollectionData } from '@/firebase/firebase.utils'
import { setCategories } from '@/store/category/category.actions'
import { Category } from '@/store/category/category.types'
import { Restaurant } from '@/store/restaurant/restaurant.types'
import { setRestaurants } from '@/store/restaurant/restaurant.actions'
import { storeWrapper } from '@/store/store'

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
	const categoriesResponse = await db.collection('categories').orderBy('order', 'asc').get()
	const categories = getCollectionData<Category>(categoriesResponse)

	const restaurantsResponse = await db.collection('restaurants').orderBy('favorites', 'desc').get()
	const restaurants = getCollectionData<Restaurant>(restaurantsResponse)

	// Replace restaurant categoriesIds with categories
	const newPopulatedRestaurants = restaurants.map((restaurant) => ({
		...restaurant,
		categories: (restaurant.categories as unknown[]).map((categoryId) => {
			return categories.find((category) => category.id === categoryId)
		}),
	}))

	store.dispatch(setCategories(categories))
	store.dispatch(setRestaurants(newPopulatedRestaurants))
})
