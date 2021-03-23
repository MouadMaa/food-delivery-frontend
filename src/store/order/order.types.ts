import { Food } from '../food/food.types'

export interface Order {
  food: Food
  count: number
}

export interface OrderServerData {
  foodId: string
  dishId: string
  count: number
}

export interface OrderRequest {
  order: OrderServerData[]
  restaurantId: string
}

export interface OrderResponse {
  status: 'success' | 'failure'
  message?: string
}

export interface OrderedFood extends Food {
  count: number
}

export const LIMIT_ORDERS = 50
