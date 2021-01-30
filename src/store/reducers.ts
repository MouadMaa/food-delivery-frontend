import { combineReducers } from 'redux'

import appReducer from './app/app.reducer'
import categoryReducer from './category/category.reducer'
import restaurantReducer from './restaurant/restaurant.reducer'
import { AppState } from './app/app.types'
import { CategoryState } from './category/category.types'
import { RestaurantState } from './restaurant/restaurant.types'

export interface RootState {
	app: AppState
	category: CategoryState
	restaurant: RestaurantState
}

const combinedReducers = combineReducers({
	app: appReducer,
	category: categoryReducer,
	restaurant: restaurantReducer,
})

export default combinedReducers
