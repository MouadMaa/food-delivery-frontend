import { FC } from 'react'
import Image from 'next/image'
import 'twin.macro'

import { Food } from '@/store/restaurant/restaurant.types'
import { StyledFoodCard } from './food-card.styles'

interface FoodCardProps {
  food: Food
}

const FoodCard: FC<FoodCardProps> = (props) => {
  const {
    food: { name, desc, price, image },
  } = props

  return (
    <StyledFoodCard className='group'>
      <figure>
        <Image src={image} alt={name} layout='fill' objectFit='cover' tw='group-hover:scale-105' />
      </figure>
      <div>
        <div>
          <h4>{name}</h4>
          <span>{`${price.toFixed(2)} DHS`}</span>
        </div>
        <p>{desc}</p>
      </div>
    </StyledFoodCard>
  )
}

export default FoodCard
