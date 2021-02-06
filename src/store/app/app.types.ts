export interface AppState {
	isSideMenuOpen: boolean
}

export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU'

interface ToggleSideMenuAction {
	type: typeof TOGGLE_SIDE_MENU
}

export type AppAction = ToggleSideMenuAction
