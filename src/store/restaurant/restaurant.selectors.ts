import { createSelector } from 'reselect'

import { RootState } from '../reducers'

const restaurantSelector = (state: RootState) => state.restaurant

export const restaurantsSelector = createSelector([ restaurantSelector ], (restaurant) => restaurant.restaurants)
