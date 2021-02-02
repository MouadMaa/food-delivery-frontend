import { Category, CategoryAction, FETCH_CATEGORIES, SELECT_CATEGORY } from './category.types'

export const fetchCategories = (categories: Category[]): CategoryAction => ({
	type: FETCH_CATEGORIES,
	payload: categories,
})

export const selectCategory = (category: Category): CategoryAction => ({
	type: SELECT_CATEGORY,
	payload: category,
})
