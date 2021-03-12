import { FC } from 'react'

import { IconButton } from '@/components/ui'
import { StyledOrderDeliveryAddress } from './order-delivery-address.styled'
import { AddressSvg } from './order-delivery-address.svg'

interface DeliveryAddressProps {
  duration: [number, number]
}

const OrderDeliveryAddress: FC<DeliveryAddressProps> = (props) => {
  const { duration } = props

  return (
    <StyledOrderDeliveryAddress>
      <div>
        <IconButton>
          <AddressSvg />
        </IconButton>
        <div>
          <span>Service Delivery</span>
          <span>{`${duration[0]}~${duration[1]} mins`}</span>
        </div>
      </div>
      <span>9.00 DHS</span>
    </StyledOrderDeliveryAddress>
  )
}

export default OrderDeliveryAddress
