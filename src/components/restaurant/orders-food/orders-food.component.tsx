import { FC } from 'react'

import { useOrdersState } from '@/store/order/order.states'
import { LIMIT_ORDERS, Order } from '@/store/order/order.types'
import OrderFoodCard from '../order-food-card/order-food-card.component'
import { StyledOrdersFood } from './orders-food.styled'

const OrdersFood: FC = () => {
  const [orders, setOrders] = useOrdersState()

  const handleClickCount = (type: 'inc' | 'dec', selectedOrder: Order) => {
    let deleteOrderIndex = -1

    const newOrders = orders.map((order, index) => {
      if (order.food.id === selectedOrder.food.id) {
        if (type === 'inc' && order.count < LIMIT_ORDERS) {
          return { ...order, count: order.count + 1 }
        } else if (type === 'dec' && order.count > 1) {
          return { ...order, count: order.count - 1 }
        } else if (type === 'dec' && order.count === 1) {
          deleteOrderIndex = index
        }
      }
      return order
    })

    if (deleteOrderIndex !== -1) newOrders.splice(deleteOrderIndex, 1)

    setOrders(newOrders)
  }

  const totalPrice = orders.reduce((acc, order) => order.count * order.food.price + acc, 0)

  return (
    <StyledOrdersFood>
      <div>
        {orders.map((order) => (
          <OrderFoodCard key={order.food.id} order={order} handleClickCount={handleClickCount} />
        ))}
        {!orders.length && <p>There are no orders yet</p>}
      </div>
      <div>
        <span>Items</span>
        <span>{`${totalPrice.toFixed(2)} DHS`}</span>
      </div>
    </StyledOrdersFood>
  )
}

export default OrdersFood
