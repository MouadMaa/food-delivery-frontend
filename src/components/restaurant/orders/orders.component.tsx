import { FC } from 'react'

import OrderCard from '../order-card/order-card.component'
import { StyledOrders, ordersStyle } from './orders.styled'

const Orders: FC = () => {
  return (
    <StyledOrders>
      <div style={ordersStyle()}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <div>
        <span>Items</span>
        <span>288.00 DHS</span>
      </div>
    </StyledOrders>
  )
}

export default Orders
