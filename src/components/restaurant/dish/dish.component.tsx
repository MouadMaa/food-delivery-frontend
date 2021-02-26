import { FC } from 'react'

import { Dish as IDish } from '@/store/restaurant/restaurant.types'
import FoodCard from '../food-card/food-card.component'
import { StyledDish } from './dish.styles'

interface DishProps {
  dish: IDish
}

const Dish: FC<DishProps> = (props) => {
  const {
    dish: { order, category, foods },
  } = props

  return (
    <StyledDish id={`#category-menu-${order}`}>
      <h3>{category}</h3>
      <div>
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </StyledDish>
  )
}

export default Dish
