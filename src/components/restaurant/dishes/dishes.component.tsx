import { FC, Fragment } from 'react'

import { Dish as IDish } from '@/store/restaurant/restaurant.types'
import Dish from '../dish/dish.component'

interface DishesProps {
  dishes: IDish[]
}

const Dishes: FC<DishesProps> = (props) => {
  const { dishes } = props

  return (
    <Fragment>
      {dishes.map((dish) => (
        <Dish key={dish.order} dish={dish} />
      ))}
      {dishes.map((dish) => (
        <Dish key={dish.order} dish={dish} />
      ))}
    </Fragment>
  )
}

export default Dishes
