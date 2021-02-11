import { selector, useRecoilValue } from 'recoil'
import { createSelector } from 'reselect'

import { RootState } from '../reducers'
import { selectedCategoryState } from '../category/category.state'
import { restaurantsState } from './restaurant.state'

const restaurantSelector = (state: RootState) => state.restaurant

export const restaurantsSelector = createSelector([ restaurantSelector ], (restaurant) => restaurant.restaurants)

export const sortRestaurantsSelector = createSelector([ restaurantSelector ], (restaurant) => restaurant.sortBy)

export const filteredRestaurantsSelector = selector({
	key: 'filteredRestaurantsSelector',
	get: ({ get }) => {
		const restaurants = get(restaurantsState)
		const selectedCategory = get(selectedCategoryState)

		if (selectedCategory.id !== 'all') {
			return restaurants.filter((restaurant) =>
				restaurant.categories.find((category) => category.id === selectedCategory.id),
			)
		}

		return restaurants
	},
})

export const useFilteredRestaurants = () => useRecoilValue(filteredRestaurantsSelector)
