import { FC } from 'react'

import OrderCard from '../order-card/order-card.component'
import { StyledOrders } from './orders.styles'

const Orders: FC = () => {
  return (
    <StyledOrders>
      <div className='orders'>
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
