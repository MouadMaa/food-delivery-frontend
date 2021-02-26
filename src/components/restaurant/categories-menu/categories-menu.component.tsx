import { FC, MouseEvent } from 'react'

import { Dish } from '@/store/restaurant/restaurant.types'
import { StyledCategoriesMenu } from './categories-menu.styles'

interface DishesCategoriesProps {
  dishes: Dish[]
}

const CategoriesMenu: FC<DishesCategoriesProps> = (props) => {
  const { dishes } = props

  const handleClick = (event: MouseEvent, dishId: string) => {
    event.preventDefault()
    document.getElementById(dishId)?.scrollIntoView()
  }

  return (
    <StyledCategoriesMenu>
      <nav>
        {dishes.map((dish) => (
          <a
            key={dish.order}
            href={`#category-menu-${dish.order}`}
            onClick={(event) => handleClick(event, `#category-menu-${dish.order}`)}
          >
            {dish.category}
          </a>
        ))}
      </nav>
    </StyledCategoriesMenu>
  )
}

export default CategoriesMenu
