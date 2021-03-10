import { FC } from 'react'
import Image from 'next/image'
import 'twin.macro'

import { useSelectedFoodState } from '@/store/food/food.state'
import { Modal } from '@/components/ui'
import { CloseSvg } from './food-modal.svg'
import { StyledFoodModal } from './food-modal.styled'
import FoodChoice from '../food-choice/food-choice.component'

interface FoodModalProps {
  imageCover: string
}

const FoodModal: FC<FoodModalProps> = (props) => {
  const { imageCover } = props

  const [selectedFood, setSelectedFood] = useSelectedFoodState()

  const onHideModal = () => setSelectedFood(null)

  let htmlFoodModal = null
  if (selectedFood) {
    const { name, desc, price, image, choices } = selectedFood
    htmlFoodModal = (
      <StyledFoodModal food={selectedFood}>
        <figure>
          <Image src={image || imageCover} alt={name} layout='fill' objectFit='cover' />
          <button onClick={onHideModal}>
            <CloseSvg />
          </button>
        </figure>

        <article>
          <div>
            <div>
              <p>{`${price.toFixed(2)} DHS`}</p>
              <h4>{name}</h4>
            </div>
            <div>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

          <p>{desc}</p>

          {choices && (
            <div>
              {choices.map((choice, index) => (
                <FoodChoice key={index} choice={choice} />
              ))}
            </div>
          )}

          <div>
            <div>
              <span>Price</span>
              <span>35.00 DHS</span>
            </div>
            <button className='group'>
              <span>Add To Order</span>
              <svg tw='group-hover:translate-x-2' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M18.5 15.5L22 12l-3.5-3.5-.707.707 2.293 2.293H2v1h18.086l-2.293 2.293.707.707z' />
              </svg>
            </button>
          </div>
        </article>
      </StyledFoodModal>
    )
  }

  return (
    <Modal isOpen={!!selectedFood} onHide={onHideModal}>
      {htmlFoodModal}
    </Modal>
  )
}

export default FoodModal
