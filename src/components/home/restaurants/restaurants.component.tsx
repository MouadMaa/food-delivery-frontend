import { FC } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'redux/reducers'
import RestaurantCard from '../restaurant-card/restaurant-card.component'
import SortBy from '../sort-by/sort-by.component'
import { StyledRestaurants } from './restaurants.styles'

const Restaurants: FC = () => {
	const { restaurants } = useSelector((state: RootState) => state.restaurant)
	console.log(restaurants)
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
