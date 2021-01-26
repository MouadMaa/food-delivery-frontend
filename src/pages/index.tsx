import { FC, Fragment } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import Categories from '@/components/home/categories/categories.component'
import Restaurants from '@/components/home/restaurants/restaurants.component'
import { firestore } from '../firebase'
import { Restaurant } from '@/models/restaurant'

const Home: FC = () => {
	const [ restaurants = [] ] = useCollectionData<Restaurant>(firestore.collection('restaurants'), { idField: 'id' })

	return (
		<Fragment>
			<Categories />
			<Restaurants restaurants={restaurants} />
		</Fragment>
	)
}

export default Home
