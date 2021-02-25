import { Category } from '@/store/category/category.types'

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

export interface Food {
  name: string
  desc: string
  price: number
  image?: string
  choices: Choice[]
}

export interface Choice {
  title: string
  type: 'single' | 'multiple'
  options: Option[]
}

export interface Option {
  name: string
  price?: number
}

export interface SortRestaurantsBy {
  title: string
  key: string
  sort: 'asc' | 'desc'
}
