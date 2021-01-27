import { FC, Fragment } from 'react'
import { GetStaticProps } from 'next'
// import { useCollectionData } from 'react-firebase-hooks/firestore'

import Categories from '@/components/home/categories/categories.component'
import Restaurants from '@/components/home/restaurants/restaurants.component'
import { Restaurant, RESTAURANTS } from '@/models/restaurant'
import { Category, CATEGORIES } from '@/models/category'
import { getCollectionData } from '../firebase/getDataFromCollectionOrDoc'
import { firestore } from '../firebase'

interface HomeProps {
	categories: Category[]
	restaurants: Restaurant[]
}

const Home: FC<HomeProps> = (props) => {
	const { categories, restaurants } = props
	// const [ restaurants = [] ] = useCollectionData<Restaurant>(firestore.collection('restaurants'), { idField: 'id' })

	return (
		<Fragment>
			<Categories categories={categories} />
			<Restaurants restaurants={restaurants} />
		</Fragment>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const categoriesResponse = await firestore.collection(CATEGORIES).get()
	const categories = getCollectionData<Category>(categoriesResponse)

	const restaurantsResponse = await firestore.collection(RESTAURANTS).get()
	const restaurants = getCollectionData<Restaurant>(restaurantsResponse)

	return {
		props: {
			restaurants,
			categories,
		},
	}
}
