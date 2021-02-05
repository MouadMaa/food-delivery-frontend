import { AppAction, TOGGLE_SIDE_MENU } from './app.types'

export const toggleMenu = (): AppAction => ({
	type: TOGGLE_SIDE_MENU,
})
