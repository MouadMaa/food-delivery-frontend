import { FC, Fragment } from 'react'
import Image from 'next/image'

import { Restaurant } from '@/store/restaurant/restaurant.types'
import { StyledRestaurantDetails } from './restaurant-details.styles'
import { RestaurantDetailsSvg } from './restaurant-details.svg'

interface RestaurantDetailsProps {
  restaurant: Restaurant
}

const RestaurantDetails: FC<RestaurantDetailsProps> = (props) => {
  const {
    restaurant: { name, imageCover, categories },
  } = props

  return (
    <StyledRestaurantDetails>
      <Image src={imageCover} alt={name} layout='fill' objectFit='cover' />
      <div />
      <div>
        <div>
          <h1>{name}</h1>
          <div>
            {categories.map((category, index) => (
              <Fragment key={index}>
                <p>{category.name}</p>
                {index < categories.length - 1 && <span>&bull;</span>}
              </Fragment>
            ))}
          </div>
        </div>
        <button>
          <RestaurantDetailsSvg />
        </button>
      </div>
    </StyledRestaurantDetails>
  )
}

export default RestaurantDetails
