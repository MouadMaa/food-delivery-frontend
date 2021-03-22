import { FC } from 'react'
import Image from 'next/image'

import { Order } from '@/store/order/order.types'
import { StyledOrderFoodCard } from './order-food-card.styled'

interface OrderFoodCardProps {
  order: Order
  handleClickCount: (type: 'inc' | 'dec', order: Order) => void
}

const OrderFoodCard: FC<OrderFoodCardProps> = (props) => {
  const { order, handleClickCount } = props

  const { name, image, price } = order.food
  const { count } = order

  return (
    <StyledOrderFoodCard>
      {image && (
        <figure>
          <Image src={image} alt={name} layout='fill' objectFit='cover' />
        </figure>
      )}
      <div>
        <div>
          <h4>{name}</h4>
          <span>{`${(price * count).toFixed(2)} DHS`}</span>
        </div>
        <div>
          <button type='button' onClick={() => handleClickCount('dec', order)}>
            -
          </button>
          <span>{count}</span>
          <button type='button' onClick={() => handleClickCount('inc', order)}>
            +
          </button>
        </div>
      </div>
    </StyledOrderFoodCard>
  )
}

export default OrderFoodCard
