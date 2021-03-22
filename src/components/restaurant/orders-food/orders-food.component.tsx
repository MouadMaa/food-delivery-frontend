import { FC } from 'react'

import { useOrdersValue } from '@/store/order/order.states'
import OrderFoodCard from '../order-food-card/order-food-card.component'
import { StyledOrdersFood } from './orders-food.styled'

const OrdersFood: FC = () => {
  const orders = useOrdersValue()

  const totalPrice = orders.reduce((acc, order) => order.count * order.food.price + acc, 0)

  return (
    <StyledOrdersFood>
      <div>
        {orders.map((order) => (
          <OrderFoodCard key={order.food.id} order={order} />
        ))}
      </div>
      <div>
        <span>Items</span>
        <span>{`${totalPrice.toFixed(2)} DHS`}</span>
      </div>
    </StyledOrdersFood>
  )
}

export default OrdersFood
