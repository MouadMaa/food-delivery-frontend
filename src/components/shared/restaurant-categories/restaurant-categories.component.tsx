import { FC, Fragment } from 'react'

import { StyledRestaurantCategories } from './restaurant-categories.styles'
import { DotSvg } from './restaurant-categories.svg'

interface RestaurantCategoriesProps {
	categories: string[]
}

const RestaurantCategories: FC<RestaurantCategoriesProps> = (props) => {
	const { categories } = props

	return (
		<StyledRestaurantCategories>
			{categories.map((category, index) => (
				<Fragment key={index}>
					<p>{category}</p>
					{index !== categories.length - 1 && <DotSvg />}
				</Fragment>
			))}
		</StyledRestaurantCategories>
	)
}

export default RestaurantCategories
