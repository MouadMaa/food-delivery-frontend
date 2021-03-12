import { IconButton } from '@/components/ui'
import { FC } from 'react'

import { StyledOrderTitle } from './order-title.styled'
import { CloseSvg } from './order-title.svg'

interface OrderTitleProps {
  onClick: () => void
}

const OrderTitle: FC<OrderTitleProps> = (props) => {
  const { onClick } = props

  return (
    <StyledOrderTitle>
      <span>My Orders</span>
      <IconButton onClick={onClick}>
        <CloseSvg />
      </IconButton>
    </StyledOrderTitle>
  )
}

export default OrderTitle
