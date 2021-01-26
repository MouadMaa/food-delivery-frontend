import { FC } from 'react'

import RestaurantCard from '../card-restaurant/card-restaurant.component'
import SortBy from '../sort-by/sort-by.component'
import { Restaurant } from '@/models/restaurant'
import { StyledRestaurants } from './restaurants.styles'

interface RestaurantsProps {
	restaurants: Restaurant[]
}

const Restaurants: FC<RestaurantsProps> = (props) => {
	const { restaurants } = props

	return (
		<StyledRestaurants>
			<article>
				<h2>Offers Around You</h2>
				<SortBy />
			</article>
			<div>{restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}</div>
		</StyledRestaurants>
	)
}

export default Restaurants
