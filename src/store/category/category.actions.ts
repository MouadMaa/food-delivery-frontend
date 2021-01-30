import { Category, CategoryAction, FETCH_CATEGORIES } from './category.types'

export const fetchCategories = (categories: Category[]): CategoryAction => ({
	type: FETCH_CATEGORIES,
	payload: categories,
})
