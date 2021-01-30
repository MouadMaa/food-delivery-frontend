import { createSelector } from 'reselect'

import { RootState } from '../reducers'

const appSelector = (state: RootState) => state.app

export const menuIsOpenSelector = createSelector([ appSelector ], (app) => app.menuIsOpen)
