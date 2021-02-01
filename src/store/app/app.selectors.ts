import { createSelector } from 'reselect'

import { RootState } from '../reducers'

const appSelector = (state: RootState) => state.app

export const menuSelector = createSelector([ appSelector ], (app) => app.menu)
