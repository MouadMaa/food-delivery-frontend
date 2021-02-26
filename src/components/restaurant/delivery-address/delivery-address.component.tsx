import { FC } from 'react'

import { IconButton } from '@/components/ui'
import { StyledDeliveryAddress } from './delivery-address.styles'
import { AddressSvg } from './delivery-address.svg'

interface DeliveryAddressProps {
  duration: [number, number]
}

const DeliveryAddress: FC<DeliveryAddressProps> = (props) => {
  const { duration } = props

  return (
    <StyledDeliveryAddress>
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
    </StyledDeliveryAddress>
  )
}

export default DeliveryAddress
