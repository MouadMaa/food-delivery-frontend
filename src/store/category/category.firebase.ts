import { Dispatch } from 'redux'

import { db } from '@/firebase/firebase'
import { getCollectionData } from '@/firebase/firebase.utils'
import { Category } from './category.types'
import { fetchCategories } from './category.actions'

export const fetchCategoriesAsync = () => async (dispatch: Dispatch) => {
	const categoriesResponse = await db.collection('categories').orderBy('order', 'asc').get()
	const categories = getCollectionData<Category>(categoriesResponse)
	dispatch(fetchCategories(categories))
}
