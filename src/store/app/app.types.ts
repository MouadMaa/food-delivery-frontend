export interface AppState {
	menu: boolean
}

export const TOGGLE_MENU = 'TOGGLE_MENU'

interface ToggleMenuAction {
	type: typeof TOGGLE_MENU
}

export type AppAction = ToggleMenuAction
