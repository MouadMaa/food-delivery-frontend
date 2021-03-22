import { selector, useSetRecoilState } from 'recoil'

import { ordersState } from './order.states'
import { Order } from './order.types'

export const ordersSelector = selector<Order[]>({
  key: 'ordersSelector',
  get: ({ get }) => get(ordersState),
  set: ({ get, set }, newValue) => {
    const newOrders = newValue as Order[]
    const prevOrders = get(ordersState)
    let isOrderExists = false

    const orders = prevOrders.map((order) => {
      if (order.food.id === newOrders[0]?.food?.id) {
        isOrderExists = true
        return { ...order, count: order.count + newOrders[0].count }
      }
      return order
    })

    if (!isOrderExists) orders.push(...newOrders)

    return set(ordersState, orders)
  },
})

export const useSetOrdersSelector = () => useSetRecoilState(ordersSelector)
