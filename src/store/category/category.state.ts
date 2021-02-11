import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

import { Category } from './category.types'

export const categoriesState = atom<Category[]>({
	key: 'categoriesState',
	default: [],
})

export const useCategoriesValue = () => useRecoilValue(categoriesState)
export const useSetCategoriesState = () => useSetRecoilState(categoriesState)
