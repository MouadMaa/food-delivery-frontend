import { SortRestaurants } from '@/store/restaurant/restaurant.types'

export const sortRestaurantsByData: SortRestaurants[] = [
	{
		name: 'Popularity',
		value: 'favorites',
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
