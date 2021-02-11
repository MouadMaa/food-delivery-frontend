import { db } from '@/firebase/firebase'
import { getCollectionData } from '@/firebase/firebase.utils'
import { Category } from './category.types'

export const fetchCategories = async (): Promise<Category[]> => {
	const categoriesResponse = await db.collection('categories').orderBy('order', 'asc').get()
	return getCollectionData<Category>(categoriesResponse)
}
