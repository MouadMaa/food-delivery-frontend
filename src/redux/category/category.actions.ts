import { Category, CategoryAction, SET_CATEGORIES } from './category.types'

export const setCategories = (categories: Category[]): CategoryAction => ({
	type: SET_CATEGORIES,
	payload: categories,
})
