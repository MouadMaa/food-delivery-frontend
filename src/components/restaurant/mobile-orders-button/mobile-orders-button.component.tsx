import { FC } from 'react'

import { StyledMobileOrdersButton } from './mobile-orders-button.styles'
import { OrderSvg } from './mobile-orders-button.svg'

interface MobileOrdersButtonProps {
  onClick: () => void
}

const MobileOrdersButton: FC<MobileOrdersButtonProps> = (props) => {
  const { onClick } = props

  return (
    <StyledMobileOrdersButton onClick={onClick}>
      <OrderSvg />
      <span>Your Orders (3)</span>
    </StyledMobileOrdersButton>
  )
}

export default MobileOrdersButton
