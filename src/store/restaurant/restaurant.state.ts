import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

import { Restaurant } from './restaurant.types'

export const restaurantsState = atom<Restaurant[]>({
	key: 'restaurantsState',
	default: [],
})

export const useRestaurantsValue = () => useRecoilValue(restaurantsState)
export const useSetRestaurantsState = () => useSetRecoilState(restaurantsState)
