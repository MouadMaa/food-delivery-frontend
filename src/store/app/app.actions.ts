import { AppAction, TOGGLE_SIDE_MENU } from './app.types'

export const toggleSideMenu = (): AppAction => ({
	type: TOGGLE_SIDE_MENU,
})
