import { FC } from 'react'
import { GetStaticProps } from 'next'
import { RecoilRoot } from 'recoil'

import { fetchCategories } from '@/store/category/category.firebase'
import { fetchRestaurants } from '@/store/restaurant/restaurant.firebase'
import { Category } from '@/store/category/category.types'
import { Restaurant } from '@/store/restaurant/restaurant.types'
import { initializeState } from '@/store/initializeState'
import Categories from '@/components/home/categories/categories.component'
import Restaurants from '@/components/home/restaurants/restaurants.component'

interface HomeProps {
	initState: {
		categoriesState: Category[]
		restaurantsState: Restaurant[]
	}
}

const Home: FC<HomeProps> = (props) => {
	const { initState } = props

	return (
		<RecoilRoot initializeState={initializeState(initState)}>
			<Categories />
			<Restaurants />
		</RecoilRoot>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const categories = await fetchCategories()
	const restaurants = await fetchRestaurants(categories)

	return {
		props: {
			initState: {
				categoriesState: categories,
				restaurantsState: restaurants,
			},
		},
	}
}
