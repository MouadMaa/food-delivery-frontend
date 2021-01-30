import { AppAction, TOGGLE_MENU } from './app.types'

export const toggleMenu = (): AppAction => ({
	type: TOGGLE_MENU,
})
