import { FC, Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Restaurant } from '@/store/restaurant/restaurant.types'
import { HeartSvg } from './restaurant-card.svg'
import {
  StyledCardRestaurant,
  StyledRestaurantCardPicture,
  StyledRestaurantCardContent,
  StyledRestaurantCardCategories,
} from './restaurant-card.styles'

interface RestaurantCardProps {
  restaurant: Restaurant
}

const RestaurantCard: FC<RestaurantCardProps> = (props) => {
  const {
    restaurant: { name, slug, imageCover, favoritesCount, duration, categories },
  } = props

  const router = useRouter()
  const handleClick = () => router.push(`/restaurant/${slug}`)

  return (
    <StyledCardRestaurant className='group' onClick={handleClick}>
      <StyledRestaurantCardPicture>
        <Image src={imageCover} alt={name} layout='fill' objectFit='cover' />
        <div className='backdrop-blur'>
          <span>{`${duration[0]}~${duration[1]} mins`}</span>
        </div>
      </StyledRestaurantCardPicture>
      <StyledRestaurantCardContent>
        <div>
          <h3>{name}</h3>
          <div>
            <HeartSvg />
            <span>{favoritesCount}</span>
          </div>
        </div>
        <StyledRestaurantCardCategories>
          {categories.slice(0, 4).map((category, index) => (
            <Fragment key={index}>
              <p>{category.name}</p>
              {index < categories.slice(0, 4).length - 1 && <span>&bull;</span>}
            </Fragment>
          ))}
        </StyledRestaurantCardCategories>
      </StyledRestaurantCardContent>
    </StyledCardRestaurant>
  )
}

export default RestaurantCard
