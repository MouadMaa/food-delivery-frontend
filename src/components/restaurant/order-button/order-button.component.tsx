import { FC } from 'react'
import axios from 'axios'
import 'twin.macro'

import { useOrdersValue } from '@/store/order/order.states'
import { OrderResponse } from '@/store/order/order.types'
import { StyledOrderButton } from './order-button.styles'

interface OrderButtonProps {
  restaurantId: string
}

const OrderButton: FC<OrderButtonProps> = (props) => {
  const { restaurantId } = props

  const orders = useOrdersValue()

  const handleStartOrder = async () => {
    const order = orders.map((order) => ({
      foodId: order.food.id,
      dishId: order.food.dishId,
      count: order.count,
    }))
    const { data } = await axios.post<OrderResponse>('/api/order', { order, restaurantId })
    console.log(data)
  }

  const totalPrice = orders.reduce((acc, order) => order.count * order.food.price + acc, 0) + 9 //  9 is price of delivery address

  return (
    <StyledOrderButton>
      <div>
        <span>{`${totalPrice.toFixed(2)} DHS`}</span>
        <span>Total Price</span>
      </div>
      <button className='group' onClick={handleStartOrder}>
        <span>Start Order</span>
        <svg tw='group-hover:translate-x-2' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M18.5 15.5L22 12l-3.5-3.5-.707.707 2.293 2.293H2v1h18.086l-2.293 2.293.707.707z' />
        </svg>
      </button>
    </StyledOrderButton>
  )
}

export default OrderButton
