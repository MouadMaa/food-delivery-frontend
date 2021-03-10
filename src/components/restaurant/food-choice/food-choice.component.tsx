import { FC } from 'react'
import 'twin.macro'

import { Choice } from '@/store/food/food.types'
import { StyledFoodChoice } from './food-choice.styled'

interface FoodChoiceProps {
  choice: Choice
}

const FoodChoice: FC<FoodChoiceProps> = (props) => {
  const {
    choice: { title, type, options },
  } = props

  return (
    <StyledFoodChoice>
      <h5>{title} ?</h5>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <div>
              {type === 'multiple' ? (
                <input
                  tw='form-checkbox h-5 w-5 text-primary-default bg-gray-200 cursor-pointer dark:bg-gray-400'
                  id={`${title}-${option.name}`}
                  type='checkbox'
                />
              ) : (
                <input
                  tw='form-radio h-5 w-5 text-primary-default bg-gray-200 cursor-pointer dark:bg-gray-400 dark:text-primary-default'
                  id={`${title}-${option.name}`}
                  name={title}
                  type='radio'
                />
              )}
              <label htmlFor={`${title}-${option.name}`}>{option.name}</label>
            </div>
            {option.price && <span>{`${option.price} DHS`}</span>}
          </div>
        ))}
      </div>
    </StyledFoodChoice>
  )
}

export default FoodChoice
