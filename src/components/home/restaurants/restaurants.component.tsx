import { FC } from 'react'

import RestaurantCard from '../card-restaurant/card-restaurant.component'
import { restaurants } from './restaurants.data'
import SortBy from '../sort-by/sort-by.component'
import { StyledRestaurants } from './restaurants.styles'

const Restaurants: FC = () => {
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
