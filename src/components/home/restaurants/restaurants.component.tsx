import { FC } from 'react'
import { useSelector } from 'react-redux'

import { restaurantsSelector } from '@/store/restaurant/restaurant.selectors'
import { selectedCategorySelector } from '@/store/category/category.selectors'
import RestaurantCard from '../restaurant-card/restaurant-card.component'
import SortBy from '../sort-by/sort-by.component'
import { StyledRestaurants } from './restaurants.styles'

const Restaurants: FC = () => {
	const restaurants = useSelector(restaurantsSelector)
	const selectedCategory = useSelector(selectedCategorySelector)

	let filteredRestaurantsBySelectedCategory = restaurants
	if (selectedCategory.id !== 'all') {
		filteredRestaurantsBySelectedCategory = restaurants.filter((restaurant) =>
			restaurant.categories.find((category) => category.id === selectedCategory.id),
		)
	}

	return (
		<StyledRestaurants>
			<article>
				<h2>Popular Near You</h2>
				<SortBy />
			</article>
			<div>
				{filteredRestaurantsBySelectedCategory.map((restaurant) => (
					<RestaurantCard key={restaurant.id} restaurant={restaurant} />
				))}
			</div>
		</StyledRestaurants>
	)
}

export default Restaurants
