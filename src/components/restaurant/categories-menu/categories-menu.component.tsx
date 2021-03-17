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
    const element = document.getElementById(dishId)
    if (element) element.scrollIntoView({ block: 'center' })
  }

  return (
    <StyledCategoriesMenu>
      <nav>
        {dishes.map((dish) => (
          <a
            key={dish.order}
            href={`#menu-${dish.order}`}
            onClick={(event) => handleClick(event, `#menu-${dish.order}`)}
          >
            {dish.name}
          </a>
        ))}
      </nav>
    </StyledCategoriesMenu>
  )
}

export default CategoriesMenu
