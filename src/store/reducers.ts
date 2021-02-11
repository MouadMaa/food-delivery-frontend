import { combineReducers } from 'redux'

import restaurantReducer from './restaurant/restaurant.reducer'
import { RestaurantState } from './restaurant/restaurant.types'

export interface RootState {
	restaurant: RestaurantState
}

const combinedReducers = combineReducers({
	restaurant: restaurantReducer,
})

export default combinedReducers
