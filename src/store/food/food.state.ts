import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import { Food } from './food.types'

export const selectedFoodState = atom<Food | null>({
  key: 'selectedFoodState',
  default: null,
})

export const useSelectedFoodValue = () => useRecoilValue(selectedFoodState)
export const useSetSelectedFoodState = () => useSetRecoilState(selectedFoodState)
export const useSelectedFoodState = () => useRecoilState(selectedFoodState)
