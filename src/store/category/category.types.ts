export interface Category {
	id: string
	name: string
}

export interface CategoryState {
	categories: Category[]
}

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

interface FetchCategoriesAction {
	type: typeof FETCH_CATEGORIES
	payload: Category[]
}

export type CategoryAction = FetchCategoriesAction
