import { combineReducers } from 'redux'

import categoryReducer from './category/category.reducer'
import restaurantReducer from './restaurant/restaurant.reducer'
import { CategoryState } from './category/category.types'
import { RestaurantState } from './restaurant/restaurant.types'

export interface RootState {
	category: CategoryState
	restaurant: RestaurantState
}

const combinedReducers = combineReducers({
	category: categoryReducer,
	restaurant: restaurantReducer,
})

export default combinedReducers
