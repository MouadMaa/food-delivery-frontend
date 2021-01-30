import { CategoryAction, CategoryState, FETCH_CATEGORIES } from './category.types'

const initState: CategoryState = {
	categories: [
		{
			id: 'all',
			name: 'All',
		},
	],
}

const categoryReducer = (state = initState, { type, payload }: CategoryAction): CategoryState => {
	switch (type) {
		case FETCH_CATEGORIES:
			return { ...state, categories: [ ...state.categories, ...payload ] }
		default:
			return state
	}
}

export default categoryReducer
