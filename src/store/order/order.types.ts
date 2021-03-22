import { Food } from '../food/food.types'

export interface Order {
  food: Food
  count: number
}

export const LIMIT_ORDERS = 50
