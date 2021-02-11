import { FC, useEffect } from 'react'

import RestaurantCard from '../restaurant-card/restaurant-card.component'
import { Restaurant } from '@/store/restaurant/restaurant.types'
import { useSetRestaurantsState } from '@/store/restaurant/restaurant.state'
import SortBy from '../sort-by/sort-by.component'
import { StyledRestaurants } from './restaurants.styles'

interface RestaurantsProps {
	restaurants: Restaurant[]
}

const Restaurants: FC<RestaurantsProps> = (props) => {
	const { restaurants } = props

	const setRestaurants = useSetRestaurantsState()

	useEffect(
		() => {
			setRestaurants(restaurants)
		},
		[ restaurants ],
	)

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
