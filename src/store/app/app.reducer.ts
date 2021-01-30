import { AppAction, AppState, TOGGLE_MENU } from './app.types'

const initState: AppState = {
	menuIsOpen: false,
}

const appReducer = (state = initState, { type }: AppAction): AppState => {
	switch (type) {
		case TOGGLE_MENU:
			return { ...state, menuIsOpen: !state.menuIsOpen }
		default:
			return state
	}
}

export default appReducer
