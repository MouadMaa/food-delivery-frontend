import { SortRestaurantsBy } from '@/store/restaurant/restaurant.types'

export const sortRestaurantsByList: SortRestaurantsBy[] = [
	{
		name: 'Popularity',
		value: 'favoritesCount',
		sort: 'desc',
	},
	{
		name: 'Duration (Low to high)',
		value: 'duration',
		sort: 'asc',
	},
	{
		name: 'Duration (High to low)',
		value: 'duration',
		sort: 'desc',
	},
]
