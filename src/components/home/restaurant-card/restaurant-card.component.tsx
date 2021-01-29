import { FC, Fragment } from 'react'

import { Restaurant } from 'store/restaurant/restaurant.types'
import {
	StyledCardRestaurant,
	StyledRestaurantCardPicture,
	StyledRestaurantCardContent,
	StyledRestaurantCardCategories,
} from './restaurant-card.styles'
import { HeartSvg, DotSvg } from './restaurant-card.svg'

interface RestaurantCardProps {
	restaurant: Restaurant
}

const RestaurantCard: FC<RestaurantCardProps> = (props) => {
	const { restaurant: { name, favorites, categories } } = props

	return (
		<StyledCardRestaurant className='group'>
			<StyledRestaurantCardPicture>
				<img src='https://bonsplansmaroc.com/wp-content/uploads/2020/03/image-pizza-hut-2.jpg' alt='pizza' />
				<div className='backdrop-blur'>
					<span>25~35 mins</span>
				</div>
			</StyledRestaurantCardPicture>
			<StyledRestaurantCardContent>
				<div>
					<h3>{name}</h3>
					<div>
						<HeartSvg />
						<span>{favorites}</span>
					</div>
				</div>
				<StyledRestaurantCardCategories>
					{categories.slice(0, 4).map((category, index) => (
						<Fragment key={index}>
							<p>{category.name}</p>
							{index < categories.slice(0, 4).length - 1 && <DotSvg />}
						</Fragment>
					))}
				</StyledRestaurantCardCategories>
			</StyledRestaurantCardContent>
		</StyledCardRestaurant>
	)
}

export default RestaurantCard
