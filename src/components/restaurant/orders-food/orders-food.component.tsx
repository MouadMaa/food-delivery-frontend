import { FC } from 'react'

import OrderFoodCard from '../order-food-card/order-food-card.component'
import { StyledOrdersFood, ordersFoodStyle } from './orders-food.styled'

const OrdersFood: FC = () => {
  return (
    <StyledOrdersFood>
      <div style={ordersFoodStyle()}>
        <OrderFoodCard />
        <OrderFoodCard />
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
