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
	const { restaurants } = props

	const [ data, setData ] = useState(restaurants)

	const setRestaurants = useSetRestaurantsState()
	useEffect(() => setRestaurants(restaurants), [ restaurants ])

	const filteredAndSortedRestaurants = useFilteredAndSortedRestaurantsValue()
	useEffect(() => setData(filteredAndSortedRestaurants), [ restaurants, filteredAndSortedRestaurants ])

	return (
		<StyledRestaurants>
			<article>
				<h2>Popular Near You</h2>
				<SortRestaurantsBy />
			</article>
			<div>{data.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}</div>
		</StyledRestaurants>
	)
}

export default Restaurants
