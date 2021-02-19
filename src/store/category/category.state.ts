import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import { Category } from './category.types'

export const categoriesState = atom<Category[]>({
	key: 'categoriesState',
	default: [],
})

export const useCategoriesValue = () => useRecoilValue(categoriesState)
export const useSetCategoriesState = () => useSetRecoilState(categoriesState)
export const useCategoriesState = () => useRecoilState(categoriesState)

export const defaultSelectedCategory = { id: 'all', name: 'All', image: '' }

export const selectedCategoryState = atom<Category>({
	key: 'selectedCategoryState',
	default: defaultSelectedCategory,
})

export const useSelectedCategoryState = () => useRecoilState(selectedCategoryState)
export const useSelectedCategoryValue = () => useRecoilValue(selectedCategoryState)
export const useSetSelectedCategoryState = () => useSetRecoilState(selectedCategoryState)
