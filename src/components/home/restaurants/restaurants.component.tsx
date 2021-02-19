import { FC, useEffect, useMemo, useRef, useState } from 'react'

import { Restaurant } from '@/store/restaurant/restaurant.types'
import { fetchMoreRestaurants } from '@/store/restaurant/restaurant.firebase'
import { useFilteredAndSortedRestaurantsValue } from '@/store/restaurant/restaurant.selectors'
import { useCategoriesValue } from '@/store/category/category.state'
import { useSetRestaurantsState } from '@/store/restaurant/restaurant.state'
import { useOnScreen } from '@/hooks/useOnScreen'
import { Loader } from '@/components/ui'
import RestaurantCard from '../restaurant-card/restaurant-card.component'
import SortRestaurantsBy from '../sort-restaurants-by/sort-restaurants-by.component'
import { StyledRestaurants } from './restaurants.styles'

interface RestaurantsProps {
	restaurants: Restaurant[]
}

const Restaurants: FC<RestaurantsProps> = (props) => {
	const [ restaurants, setRestaurants ] = useState(props.restaurants)

	const categories = useCategoriesValue()

	const fetchMoreRef = useRef()
	const fetchMoreOnScreen = useOnScreen(fetchMoreRef, '200px')
	const [ fetchMoreLoading, setFetchMoreLoading ] = useState(false)

	const setRestaurantsState = useSetRestaurantsState()
	useEffect(() => setRestaurantsState(props.restaurants), [ restaurants ])

	const filteredAndSortedRestaurants = useFilteredAndSortedRestaurantsValue()
	useEffect(
		() => {
			if (filteredAndSortedRestaurants.length) setRestaurants(filteredAndSortedRestaurants)
		},
		[ filteredAndSortedRestaurants ],
	)

	useEffect(
		() => {
			if (fetchMoreOnScreen) fetchMore()
		},
		[ fetchMoreOnScreen ],
	)

	const fetchMore = async () => {
		setFetchMoreLoading(true)
		const latestRestaurant = restaurants[restaurants.length - 1]
		const newRestaurants = await fetchMoreRestaurants(latestRestaurant, categories)
		if (newRestaurants) setRestaurants(restaurants.concat(newRestaurants))
		setFetchMoreLoading(false)
	}

	return (
		<StyledRestaurants>
			<article>
				<h2>Popular Near You</h2>
				<SortRestaurantsBy />
			</article>
			<div>
				{useMemo(
					() => restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />),
					[ restaurants ],
				)}
			</div>
			<div>{fetchMoreLoading && <Loader />}</div>
			<span ref={fetchMoreRef} />
		</StyledRestaurants>
	)
}

export default Restaurants
