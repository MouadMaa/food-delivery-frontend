import { createSelector } from 'reselect'

import { RootState } from '../reducers'

const categorySelector = (state: RootState) => state.category

export const categoriesSelector = createSelector([ categorySelector ], (category) => category.categories)
