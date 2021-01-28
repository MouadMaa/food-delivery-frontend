import { Category } from './category'

export interface Restaurant {
	id: string
	name: string
	favorites: number
	categories: Category[]
}

export const RESTAURANTS = 'restaurants'
