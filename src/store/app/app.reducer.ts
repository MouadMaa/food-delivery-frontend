import { AppAction, AppState, TOGGLE_SIDE_MENU } from './app.types'

const initState: AppState = {
	isSideMenuOpen: false,
}

const appReducer = (state = initState, action: AppAction): AppState => {
	switch (action.type) {
		case TOGGLE_SIDE_MENU:
			return { ...state, isSideMenuOpen: !state.isSideMenuOpen }
		default:
			return state
	}
}

export default appReducer
