import { atom, useRecoilValue } from 'recoil'

import { Category } from './category.types'

export const categoriesState = atom<Category[]>({
	key: 'categoriesState',
	default: [],
})

export const useCategoriesValue = () => useRecoilValue(categoriesState)
