import { CategoryAction, CategoryState, FETCH_CATEGORIES, SELECT_CATEGORY } from './category.types'

const defaultCategory = {
	id: 'all',
	name: 'All',
}

const initState: CategoryState = {
	categories: [ defaultCategory ],
	selected: defaultCategory,
}

const categoryReducer = (state = initState, action: CategoryAction): CategoryState => {
	switch (action.type) {
		case FETCH_CATEGORIES:
			return { ...state, categories: [ ...state.categories, ...action.payload ] }
		case SELECT_CATEGORY:
			return { ...state, selected: action.payload }
		default:
			return state
	}
}

export default categoryReducer
