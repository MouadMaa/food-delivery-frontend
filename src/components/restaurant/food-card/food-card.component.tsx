import { FC } from 'react'
import Image from 'next/image'
import 'twin.macro'

import { Food } from '@/store/food/food.types'
import { StyledFoodCard } from './food-card.styles'
import { useSetSelectedFoodState } from '@/store/food/food.state'

interface FoodCardProps {
  food: Food
}

const FoodCard: FC<FoodCardProps> = (props) => {
  const { food } = props

  const setSelectedFood = useSetSelectedFoodState()
  const handleClick = () => setSelectedFood(food)

  const { name, desc, price, image } = food

  return (
    <StyledFoodCard className='group' imageIsExits={!!image} onClick={handleClick}>
      {image && (
        <figure>
          <Image
            src={image}
            alt={name}
            layout='fill'
            objectFit='cover'
            tw='group-hover:scale-105'
          />
        </figure>
      )}
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
