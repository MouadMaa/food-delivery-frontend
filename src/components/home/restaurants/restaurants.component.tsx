import { FC, useEffect, useState } from 'react'

import { Restaurant } from '@/store/restaurant/restaurant.types'
import { fetchMoreRestaurants } from '@/store/restaurant/restaurant.firebase'
import { useFilteredAndSortedRestaurantsValue } from '@/store/restaurant/restaurant.selectors'
import { useCategoriesValue } from '@/store/category/category.state'
import { useRestaurantsState } from '@/store/restaurant/restaurant.state'
import RestaurantCard from '../restaurant-card/restaurant-card.component'
import SortRestaurantsBy from '../sort-restaurants-by/sort-restaurants-by.component'
import { StyledRestaurants } from './restaurants.styles'

interface RestaurantsProps {
	restaurants: Restaurant[]
}

const Restaurants: FC<RestaurantsProps> = (props) => {
	const [ data, setData ] = useState(props.restaurants)

	const categories = useCategoriesValue()

	const [ restaurants, setRestaurants ] = useRestaurantsState()
	useEffect(
		() => {
			setRestaurants(restaurants.length > props.restaurants.length ? restaurants : props.restaurants)
		},
		[ props ],
	)

	const filteredAndSortedRestaurants = useFilteredAndSortedRestaurantsValue()
	useEffect(
		() => {
			setData(filteredAndSortedRestaurants)
		},
		[ restaurants, filteredAndSortedRestaurants ],
	)

	const fetchMore = async () => {
		const newRestaurants = await fetchMoreRestaurants(categories, restaurants[restaurants.length - 1])
		newRestaurants.length && setRestaurants(restaurants.concat(newRestaurants))
	}

	return (
		<StyledRestaurants>
			<article>
				<h2>Popular Near You</h2>
				<SortRestaurantsBy />
			</article>
			<div>{data.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}</div>
			<button onClick={fetchMore}>load more</button>
		</StyledRestaurants>
	)
}

export default Restaurants
