import { FC } from 'react'
import Image from 'next/image'

import { StyledOrderFoodCard } from './order-food-card.styled'

const OrderFoodCard: FC = () => {
  return (
    <StyledOrderFoodCard>
      <figure>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/delivery-food-da280.appspot.com/o/foods%2Fmcdonalds%2F2-2.png?alt=media&token=651a8cf1-1a12-4902-8563-47d200122f3d'
          alt='mcdonalds burger'
          layout='fill'
          objectFit='cover'
        />
      </figure>
      <div>
        <div>
          <h4>Big Chicken Sauce Moroccan</h4>
          <span>72.00 DHS</span>
        </div>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
    </StyledOrderFoodCard>
  )
}

export default OrderFoodCard
