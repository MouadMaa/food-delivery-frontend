import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import { Order } from './order.types'

export const ordersState = atom<Order[]>({
  key: 'ordersState',
  default: [],
})

export const useOrdersValue = () => useRecoilValue(ordersState)
export const useSetOrdersState = () => useSetRecoilState(ordersState)
export const useOrdersState = () => useRecoilState(ordersState)
