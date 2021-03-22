import { FC } from 'react'
import 'twin.macro'

import { useOrdersValue } from '@/store/order/order.states'
import { StyledOrderButton } from './order-button.styles'

const OrderButton: FC = () => {
  const orders = useOrdersValue()

  const totalPrice = orders.reduce((acc, order) => order.count * order.food.price + acc, 0) + 9

  return (
    <StyledOrderButton>
      <div>
        <span>{`${totalPrice.toFixed(2)} DHS`}</span>
        <span>Total Price</span>
      </div>
      <button className='group'>
        <span>Start Order</span>
        <svg tw='group-hover:translate-x-2' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M18.5 15.5L22 12l-3.5-3.5-.707.707 2.293 2.293H2v1h18.086l-2.293 2.293.707.707z' />
        </svg>
      </button>
    </StyledOrderButton>
  )
}

export default OrderButton
