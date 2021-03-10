import { Category } from '@/store/category/category.types'
import { Food } from '../food/food.types'

export interface Restaurant {
  id: string
  name: string
  slug: string
  imageCover: string
  categories: Category[]
  favoritesCount: number
  duration: [number, number]
  dishes: Dish[]
}

export interface Dish {
  category: string
  order: number
  foods: Food[]
}

export interface SortRestaurantsBy {
  title: string
  key: string
  sort: 'asc' | 'desc'
}
