export interface Category {
	id: string
	name: string
}

export interface CategoryState {
	categories: Category[]
	selected: Category
}

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

interface FetchCategoriesAction {
	type: typeof FETCH_CATEGORIES
	payload: Category[]
}

interface SelectCategoryAction {
	type: typeof SELECT_CATEGORY
	payload: Category
}

export type CategoryAction = FetchCategoriesAction | SelectCategoryAction
