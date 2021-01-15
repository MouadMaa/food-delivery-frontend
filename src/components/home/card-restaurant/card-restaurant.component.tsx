import { FC } from 'react'

import { RestaurantCategories } from '@/components/shared'
import {
	StyledCardRestaurant,
	StyledCardRestaurantPicture,
	StyledCardRestaurantContent,
} from './card-restaurant.styles'
import { HeartSvg } from './card-restaurant.svg'

interface RestaurantCardProps {
	restaurant: {
		name: string
		image: string
		favorites: number
		timeBetween: [number, number]
		categories: string[]
	}
}

const RestaurantCard: FC<RestaurantCardProps> = (props) => {
	const { restaurant: { name, image, favorites, timeBetween, categories } } = props

	return (
		<StyledCardRestaurant className='group'>
			<StyledCardRestaurantPicture>
				<img src={image} alt={name} />
				<div className='modal'>
					<span>
						{timeBetween[0]}~{timeBetween[1]} min
					</span>
				</div>
			</StyledCardRestaurantPicture>

			<StyledCardRestaurantContent>
				<div>
					<h3>{name}</h3>
					<div>
						<HeartSvg />
						<span>{favorites}</span>
					</div>
				</div>

				<RestaurantCategories categories={categories} />
			</StyledCardRestaurantContent>
		</StyledCardRestaurant>
	)
}

export default RestaurantCard
