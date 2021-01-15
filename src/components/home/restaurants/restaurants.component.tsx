import { FC } from 'react'

import SortBy from '../sort-by/sort-by.component'
import { StyledRestaurants } from './restaurants.styles'

const Restaurants: FC = () => {
	return (
		<StyledRestaurants>
			<article>
				<h2>Offers Around You</h2>
				<SortBy />
			</article>
		</StyledRestaurants>
	)
}

export default Restaurants
