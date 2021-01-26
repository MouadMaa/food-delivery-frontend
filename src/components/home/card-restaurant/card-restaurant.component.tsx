import { FC } from 'react'

import { RestaurantCategories } from '@/components/shared'
import {
	StyledCardRestaurant,
	StyledCardRestaurantPicture,
	StyledCardRestaurantContent,
} from './card-restaurant.styles'
import { HeartSvg } from './card-restaurant.svg'
import { Restaurant } from '@/models/restaurant'

interface RestaurantCardProps {
	restaurant: Restaurant
}

const RestaurantCard: FC<RestaurantCardProps> = (props) => {
	const { restaurant: { name } } = props

	return (
		<StyledCardRestaurant className='group'>
			<StyledCardRestaurantPicture>
				<img src='https://bonsplansmaroc.com/wp-content/uploads/2020/03/image-pizza-hut-2.jpg' alt='pizza' />
				<div className='backdrop-blur'>
					<span>25~35 min</span>
				</div>
			</StyledCardRestaurantPicture>
			<StyledCardRestaurantContent>
				<div>
					<h3>{name}</h3>
					<div>
						<HeartSvg />
						<span>214</span>
					</div>
				</div>
				<RestaurantCategories categories={[ 'Pizza', 'Moroccan', 'Fast Food' ]} />
			</StyledCardRestaurantContent>
		</StyledCardRestaurant>
	)
}

export default RestaurantCard
