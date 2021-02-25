import { SortRestaurantsBy } from '@/store/restaurant/restaurant.types'

export const sortRestaurantsByList: SortRestaurantsBy[] = [
  {
    title: 'Popularity',
    key: 'favoritesCount',
    sort: 'desc',
  },
  {
    title: 'Duration (Low to high)',
    key: 'duration',
    sort: 'asc',
  },
  {
    title: 'Duration (High to low)',
    key: 'duration',
    sort: 'desc',
  },
]
