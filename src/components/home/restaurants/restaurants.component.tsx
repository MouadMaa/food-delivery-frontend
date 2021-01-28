import { FC } from 'react'

import { Restaurant } from '@/models/restaurant'
import RestaurantCard from '../restaurant-card/restaurant-card.component'
import SortBy from '../sort-by/sort-by.component'
import { StyledRestaurants } from './restaurants.styles'

interface RestaurantsProps {
	restaurants: Restaurant[]
}

const Restaurants: FC<RestaurantsProps> = (props) => {
	const { restaurants } = props

	return (
		<StyledRestaurants>
			<article>
				<h2>Popular Near You</h2>
				<SortBy />
			</article>
			<div>{restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}</div>
		</StyledRestaurants>
	)
}

export default Restaurants
