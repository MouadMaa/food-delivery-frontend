import { FC, Fragment } from 'react'
import { GetStaticProps } from 'next'
import { useRecoilValue } from 'recoil'

import Categories from '@/components/home/categories/categories.component'
import Restaurants from '@/components/home/restaurants/restaurants.component'
import { storeWrapper } from '@/store/store'
import { fetchRestaurantsAsync } from '@/store/restaurant/restaurant.firebase'
import { fetchCategoriesAsync } from '@/store/category/category.firebase'
import { userState } from '@/hooks/useFirebaseAuth'

const Home: FC = () => {
	const user = useRecoilValue(userState)

	console.log('user', user)

	return (
		<Fragment>
			<Categories />
			<Restaurants />
		</Fragment>
	)
}

export default Home

export const getStaticProps: GetStaticProps = storeWrapper.getStaticProps(async ({ store }) => {
	await store.dispatch(fetchCategoriesAsync() as any)
	await store.dispatch(fetchRestaurantsAsync() as any)
})
