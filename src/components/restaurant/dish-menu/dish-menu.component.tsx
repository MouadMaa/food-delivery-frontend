import { FC, MouseEvent } from 'react'

import { Dish } from '@/store/restaurant/restaurant.types'
import { StyledDishMenu } from './dish-menu.styles'

interface DishMenuProps {
  dishes: Dish[]
}

const DishMenu: FC<DishMenuProps> = (props) => {
  const { dishes } = props

  const handleClick = (event: MouseEvent, dishId: string) => {
    event.preventDefault()
    const element = document.getElementById(dishId)
    if (element) element.scrollIntoView({ block: 'center' })
  }

  return (
    <StyledDishMenu>
      <nav>
        {dishes.map((dish) => (
          <a
            key={dish.order}
            href={`#dish-menu-${dish.order}`}
            onClick={(event) => handleClick(event, `#dish-menu-${dish.order}`)}
          >
            {dish.name}
          </a>
        ))}
      </nav>
    </StyledDishMenu>
  )
}

export default DishMenu
