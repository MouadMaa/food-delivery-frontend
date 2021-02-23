import { Category } from '@/store/category/category.types'

export interface Restaurant {
	id: string
	name: string
	slug: string
	imageCover: string
	categories: Category[]
	favoritesCount: number
	duration: [number, number]
}

export interface SortRestaurantsBy {
	name: string
	value: string
	sort: 'asc' | 'desc'
}
