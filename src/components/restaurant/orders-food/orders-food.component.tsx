import { FC } from 'react'

import OrderFoodCard from '../order-food-card/order-food-card.component'
import { StyledOrdersFood } from './orders-food.styled'

const OrdersFood: FC = () => {
  return (
    <StyledOrdersFood>
      <div>
        <OrderFoodCard />
        <OrderFoodCard />
        <OrderFoodCard />
      </div>
      <div>
        <span>Items</span>
        <span>288.00 DHS</span>
      </div>
    </StyledOrdersFood>
  )
}

export default OrdersFood
