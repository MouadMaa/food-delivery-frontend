import { FC, Fragment } from 'react'

import { Dish as IDish } from '@/store/restaurant/restaurant.types'
import FoodCard from '../food-card/food-card.component'
import { StyledDish } from './dishes.styled'

interface DishesProps {
  dishes: IDish[]
}

const Dishes: FC<DishesProps> = (props) => {
  const { dishes } = props

  return (
    <Fragment>
      {dishes.map(({ id, order, name, foods }) => (
        <StyledDish key={order} id={`#dish-menu-${order}`}>
          <h3>{name}</h3>
          <div>
            {foods.map((food) => (
              <FoodCard key={food.id} food={{ ...food, dishId: id }} />
            ))}
          </div>
        </StyledDish>
      ))}
    </Fragment>
  )
}

export default Dishes
