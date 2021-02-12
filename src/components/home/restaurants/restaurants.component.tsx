import { FC, useEffect, useState } from 'react'

import RestaurantCard from '../restaurant-card/restaurant-card.component'
import { Restaurant } from '@/store/restaurant/restaurant.types'
import { useSetRestaurantsState } from '@/store/restaurant/restaurant.state'
import { useFilteredAndSortedRestaurantsValue } from '@/store/restaurant/restaurant.selectors'
import SortRestaurantsBy from '../sort-restaurants-by/sort-restaurants-by.component'
import { StyledRestaurants } from './restaurants.styles'

interface RestaurantsProps {
	restaurants: Restaurant[]
}

const Restaurants: FC<RestaurantsProps> = (props) => {
	const [ restaurants, setRestaurants ] = useState(props.restaurants)

	const setRestaurantsState = useSetRestaurantsState()
	useEffect(() => setRestaurantsState(props.restaurants), [ props ])

	const filteredAndSortedRestaurants = useFilteredAndSortedRestaurantsValue()
	useEffect(() => setRestaurants(filteredAndSortedRestaurants), [ restaurants, filteredAndSortedRestaurants ])

	return (
		<StyledRestaurants>
			<article>
				<h2>Popular Near You</h2>
				<SortRestaurantsBy />
			</article>
			<div>{restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}</div>
		</StyledRestaurants>
	)
}

export default Restaurants
