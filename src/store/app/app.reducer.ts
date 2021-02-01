import { AppAction, AppState, TOGGLE_MENU } from './app.types'

const initState: AppState = {
	menu: false,
}

const appReducer = (state = initState, { type }: AppAction): AppState => {
	switch (type) {
		case TOGGLE_MENU:
			return { ...state, menu: !state.menu }
		default:
			return state
	}
}

export default appReducer
