import { FC } from 'react'

import { Dish } from '@/store/restaurant/restaurant.types'
import { StyledDishesCategories } from './dishes-categories.styles'

interface DishesCategoriesProps {
  dishes: Dish[]
}

const DishesCategories: FC<DishesCategoriesProps> = (props) => {
  const { dishes } = props

  return (
    <StyledDishesCategories>
      <nav>
        {dishes.map((dish) => (
          <a key={dish.order} href={`#${dish.category}`}>
            {dish.category}
          </a>
        ))}
      </nav>
    </StyledDishesCategories>
  )
}

export default DishesCategories
