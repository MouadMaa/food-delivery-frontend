import { FC } from 'react'

import { StyledMobileOrdersButton } from './mobile-orders-button.styles'
import { OrderSvg } from './mobile-orders-button.svg'

interface MobileOrdersButtonProps {
  show: boolean
  onClick: () => void
}

const MobileOrdersButton: FC<MobileOrdersButtonProps> = (props) => {
  const { show, onClick } = props

  return (
    <StyledMobileOrdersButton show={show} onClick={onClick}>
      <OrderSvg />
      <span>Your Orders (3)</span>
    </StyledMobileOrdersButton>
  )
}

export default MobileOrdersButton
