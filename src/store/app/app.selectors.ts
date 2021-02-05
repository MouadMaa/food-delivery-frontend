import { createSelector } from 'reselect'

import { RootState } from '../reducers'

const appSelector = (state: RootState) => state.app

export const isSideMenuOpenSelector = createSelector([ appSelector ], (app) => app.isSideMenuOpen)
