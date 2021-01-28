export interface Category {
	id: string
	name: string
}

export interface CategoryState {
	categories: Category[]
}

export const SET_CATEGORIES = 'SET_CATEGORIES'

interface SetCategoriesAction {
	type: typeof SET_CATEGORIES
	payload: Category[]
}

export type CategoryAction = SetCategoriesAction
