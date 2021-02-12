import { selector, useRecoilValue } from 'recoil'

import { selectedCategoryState } from '../category/category.state'
import { restaurantsState, sortRestaurantsByState } from './restaurant.state'
import { filterRestaurants, sortRestaurants } from './restaurant.utils'

export const filteredAndSortedRestaurantsState = selector({
	key: 'filteredAndSortedRestaurantsState',
	get: ({ get }) => {
		let restaurants = get(restaurantsState)
		const selectedCategory = get(selectedCategoryState)
		const sortRestaurantsBy = get(sortRestaurantsByState)

		restaurants = filterRestaurants(restaurants, selectedCategory)
		restaurants = sortRestaurants(restaurants, sortRestaurantsBy)

		return restaurants
	},
})

export const useFilteredAndSortedRestaurantsValue = () => useRecoilValue(filteredAndSortedRestaurantsState)
