import { atom, useRecoilValue } from 'recoil'

import { Restaurant } from './restaurant.types'

export const restaurantsState = atom<Restaurant[]>({
	key: 'restaurantsState',
	default: [],
})

export const useRestaurantsValue = () => useRecoilValue(restaurantsState)
