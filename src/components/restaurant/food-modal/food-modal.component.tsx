import React, { FC } from 'react'
import Image from 'next/image'

import { useSelectedFoodState } from '@/store/food/food.state'
import { Modal } from '@/components/ui'
import FoodChoice from '../food-choice/food-choice.component'
import { CloseSvg } from './food-modal.svg'
import { StyledFoodModal } from './food-modal.styled'

interface FoodModalProps {
  imageCover: string
}

const FoodModal: FC<FoodModalProps> = (props) => {
  const { imageCover } = props

  let [selectedFood, setSelectedFood] = useSelectedFoodState()

  const handleSubmit = (event: React.SyntheticEvent) => event.preventDefault()

  const onHideModal = () => setSelectedFood(null)

  return (
    <Modal show={!!selectedFood} onHide={onHideModal}>
      {selectedFood && (
        <StyledFoodModal food={selectedFood}>
          <figure>
            <Image
              src={selectedFood.image || imageCover}
              alt={selectedFood.name}
              layout='fill'
              objectFit='cover'
            />
            <button onClick={onHideModal}>
              <CloseSvg />
            </button>
          </figure>

          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <p>{`${selectedFood.price.toFixed(2)} DHS`}</p>
                <h3>{selectedFood.name}</h3>
              </div>
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>

            <p>{selectedFood.desc}</p>

            {!!selectedFood.choices.length && (
              <div>
                {selectedFood.choices.map((choice, index) => (
                  <FoodChoice key={index} choice={choice} />
                ))}
              </div>
            )}

            <div>
              <div>
                <span>Price</span>
                <span>35.00 DHS</span>
              </div>
              <button>Add To Order</button>
            </div>
          </form>
        </StyledFoodModal>
      )}
    </Modal>
  )
}

export default FoodModal
