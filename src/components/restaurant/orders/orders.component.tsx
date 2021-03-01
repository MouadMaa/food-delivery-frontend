import { CSSProperties, FC } from 'react'

import OrderCard from '../order-card/order-card.component'
import { StyledOrders } from './orders.styles'

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

const ordersStyle = (): CSSProperties =>
  typeof window !== 'undefined'
    ? { maxHeight: `calc(${document.querySelector('aside')?.offsetHeight}px - 300px)` }
    : {}
