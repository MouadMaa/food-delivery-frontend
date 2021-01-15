import { FC, Fragment } from 'react'

import Categories from '@/components/home/categories/categories.component'
import Restaurants from '@/components/home/restaurants/restaurants.component'

const Home: FC = () => {
	return (
		<Fragment>
			<Categories />
			<Restaurants />
		</Fragment>
	)
}

export default Home
