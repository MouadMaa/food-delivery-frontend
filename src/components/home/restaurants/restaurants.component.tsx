import { FC, useEffect, useMemo, useRef, useState } from 'react'

import { Restaurant } from '@/store/restaurant/restaurant.types'
import { fetchMoreRestaurants } from '@/store/restaurant/restaurant.firebase'
import { useFilteredAndSortedRestaurantsValue } from '@/store/restaurant/restaurant.selectors'
import { useCategoriesValue } from '@/store/category/category.state'
import { useRestaurantsState } from '@/store/restaurant/restaurant.state'
import { useOnScreen } from '@/hooks/useOnScreen'
import { Loader } from '@/components/ui'
import RestaurantCard from '../restaurant-card/restaurant-card.component'
import SortRestaurantsBy from '../sort-restaurants-by/sort-restaurants-by.component'
import { StyledRestaurants } from './restaurants.styles'

interface RestaurantsProps {
	restaurants: Restaurant[]
}

const Restaurants: FC<RestaurantsProps> = (props) => {
	const [ data, setData ] = useState(props.restaurants)

	const fetchMoreRef = useRef()
	const fetchMoreOnScreen = useOnScreen(fetchMoreRef, '200px')
	const [ fetchMoreLoading, setFetchMoreLoading ] = useState(false)

	const categories = useCategoriesValue()
	const [ restaurants, setRestaurants ] = useRestaurantsState()
	const filteredAndSortedRestaurants = useFilteredAndSortedRestaurantsValue()

	useEffect(
		() => {
			setRestaurants(restaurants.length > props.restaurants.length ? restaurants : props.restaurants)
		},
		[ props ],
	)

	useEffect(
		() => {
			setData(filteredAndSortedRestaurants)
		},
		[ restaurants, filteredAndSortedRestaurants ],
	)

	useEffect(
		() => {
			fetchMoreOnScreen && fetchMore()
		},
		[ fetchMoreOnScreen ],
	)

	const fetchMore = async () => {
		setFetchMoreLoading(true)
		const newRestaurants = await fetchMoreRestaurants(categories, restaurants[restaurants.length - 1])
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
				{useMemo(() => data.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />), [
					data,
				])}
			</div>
			<div>
				<span ref={fetchMoreRef} />
				{fetchMoreLoading && <Loader />}
			</div>
		</StyledRestaurants>
	)
}

export default Restaurants
