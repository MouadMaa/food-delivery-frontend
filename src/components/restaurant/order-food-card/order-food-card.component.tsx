import { FC } from 'react'
import Image from 'next/image'

import { LIMIT_ORDERS, Order } from '@/store/order/order.types'
import { useSetOrdersSelector } from '@/store/order/order.selectors'
import { StyledOrderFoodCard } from './order-food-card.styled'

interface OrderFoodCardProps {
  order: Order
}

const OrderFoodCard: FC<OrderFoodCardProps> = (props) => {
  const { order } = props
  console.log('🚀 ~ file: order-food-card.component.tsx ~ line 14 ~ order', order)

  const setOrders = useSetOrdersSelector()

  const handleClickCount = (type: 'inc' | 'dec') => {
    const newOrder: Order = { ...order }

    if (type === 'inc' && count < LIMIT_ORDERS) newOrder.count = 1
    else if (type === 'dec' && count > 1) newOrder.count = -1
    else if (type === 'dec' && count === 1) newOrder.count = 0

    setOrders([newOrder])
  }

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
          <button type='button' onClick={() => handleClickCount('dec')}>
            -
          </button>
          <span>{count}</span>
          <button type='button' onClick={() => handleClickCount('inc')}>
            +
          </button>
        </div>
      </div>
    </StyledOrderFoodCard>
  )
}

export default OrderFoodCard
