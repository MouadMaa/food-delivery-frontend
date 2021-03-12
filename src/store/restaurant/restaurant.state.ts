import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import { Restaurant, SortRestaurantsBy } from './restaurant.types'

export const restaurantsState = atom<Restaurant[]>({
  key: 'restaurantsState',
  default: [],
})

export const useRestaurantsValue = () => useRecoilValue(restaurantsState)
export const useSetRestaurantsState = () => useSetRecoilState(restaurantsState)
export const useRestaurantsState = () => useRecoilState(restaurantsState)

export const sortRestaurantsByState = atom<SortRestaurantsBy>({
  key: 'sortRestaurantsByState',
  default: {
    title: 'Popularity',
    key: 'favoritesCount',
    sort: 'desc',
  },
})

export const useSortRestaurantsByState = () => useRecoilState(sortRestaurantsByState)
