import { FC } from 'react'

import { Dish as IDish } from '@/store/restaurant/restaurant.types'
import { StyledDish } from './dish.styles'

interface DishProps {
  dish: IDish
}

const Dish: FC<DishProps> = (props) => {
  const {
    dish: { category, foods },
  } = props

  return (
    <StyledDish>
      <h3>{category}</h3>
      <div>
        {foods.map((food, index) => (
          <p key={index}>{food}</p>
        ))}
      </div>
    </StyledDish>
  )
}

export default Dish
