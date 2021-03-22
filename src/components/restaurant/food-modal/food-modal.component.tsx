import React, { FC, useState } from 'react'
import Image from 'next/image'

import { useSelectedFoodState } from '@/store/food/food.state'
import { LIMIT_ORDERS } from '@/store/order/order.types'
import { useOrdersState } from '@/store/order/order.states'
import { Modal } from '@/components/ui'
import FoodChoice from '../food-choice/food-choice.component'
import { CloseSvg } from './food-modal.svg'
import { StyledFoodModal } from './food-modal.styled'

interface FoodModalProps {
  imageCover: string
}

const FoodModal: FC<FoodModalProps> = (props) => {
  const { imageCover } = props

  const [orders, setOrders] = useOrdersState()
  let [selectedFood, setSelectedFood] = useSelectedFoodState()

  const [orderCount, setOrderCount] = useState(1)

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    let isOrderExists = false

    const newOrders = orders.map((order) => {
      if (order.food.id === selectedFood?.id) {
        isOrderExists = true
        return { ...order, count: order.count + orderCount }
      }
      return order
    })

    if (!isOrderExists) {
      newOrders.push({
        food: selectedFood!,
        count: orderCount,
      })
    }

    setOrders(newOrders)

    onHideModal()
  }

  const handleClickCount = (type: 'inc' | 'dec') => {
    if (type === 'inc' && orderCount < LIMIT_ORDERS) setOrderCount(orderCount + 1)
    else if (type === 'dec' && orderCount > 1) setOrderCount(orderCount - 1)
  }

  const onHideModal = () => {
    setSelectedFood(null)
    setOrderCount(1)
  }

  const totalPrice = selectedFood ? selectedFood.price * orderCount : 0

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
                <button type='button' onClick={() => handleClickCount('dec')}>
                  -
                </button>
                <span>{orderCount}</span>
                <button type='button' onClick={() => handleClickCount('inc')}>
                  +
                </button>
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
                <span>{`${totalPrice.toFixed(2)} DHS`}</span>
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
