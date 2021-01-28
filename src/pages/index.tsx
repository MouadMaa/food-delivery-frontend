import { FC, Fragment } from 'react'
import { GetStaticProps } from 'next'

import Categories from '@/components/home/categories/categories.component'
import Restaurants from '@/components/home/restaurants/restaurants.component'
import { Restaurant, RESTAURANTS } from '@/models/restaurant'
import { Category, CATEGORIES } from '@/models/category'
import { firestore } from '../firebase'
import { getCollectionData } from '../firebase/getDataFromCollectionOrDoc'

interface HomeProps {
	categories: Category[]
	restaurants: Restaurant[]
}

const Home: FC<HomeProps> = (props) => {
	const { categories, restaurants } = props

	return (
		<Fragment>
			<Categories categories={categories} />
			<Restaurants restaurants={restaurants} />
		</Fragment>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const categoriesResponse = await firestore.collection(CATEGORIES).orderBy('order', 'asc').get()
	const categories = getCollectionData<Category>(categoriesResponse)

	const restaurantsResponse = await firestore.collection(RESTAURANTS).orderBy('favorites', 'desc').get()
	const restaurants = getCollectionData<Restaurant>(restaurantsResponse)

	// Replace restaurant categoriesIds with categories
	restaurants.forEach((restaurant) => {
		restaurant.categories = (restaurant.categories as unknown[]).map((categoryId) => {
			return categories.find((category) => category.id === categoryId)
		})
	})

	return {
		props: {
			restaurants,
			categories: [ ...categories, ...categories ],
		},
	}
}
