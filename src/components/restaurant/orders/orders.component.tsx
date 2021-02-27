import { FC } from 'react'

import OrderCard from '../order-card/order-card.component'
import { StyledOrders } from './orders.styles'

const Orders: FC = () => {
  return (
    <StyledOrders>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </StyledOrders>
  )
}

export default Orders
