import { createSelector } from 'reselect'

import { RootState } from '../reducers'
import { selectedCategorySelector } from '../category/category.selectors'
import { filterAndSortRestaurants } from './restaurant.utils'

const restaurantSelector = (state: RootState) => state.restaurant

export const restaurantsSelector = createSelector(
	[ restaurantSelector, selectedCategorySelector ],
	(restaurant, selectedCategory) => filterAndSortRestaurants(restaurant, selectedCategory),
)

export const sortRestaurantsSelector = createSelector([ restaurantSelector ], (restaurant) => restaurant.sortBy)
