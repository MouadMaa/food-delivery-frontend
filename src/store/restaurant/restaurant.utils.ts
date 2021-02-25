import { Restaurant, SortRestaurantsBy } from './restaurant.types'
import { Category } from '../category/category.types'

// Replace restaurant categoriesIds with categories
export const populateRestaurantsWithCategories = (
  restaurants: Restaurant[],
  categories: Category[],
): Restaurant[] => {
  return restaurants.map((restaurant) => ({
    ...restaurant,
    categories: (restaurant.categories as unknown[]).map((categoryId) => {
      return categories.find((category) => category.id === categoryId)
    }),
  }))
}

// Filter restaurants by category
export const filterRestaurants = (restaurants: Restaurant[], selectedCategory: Category) => {
  return selectedCategory.id !== 'all'
    ? restaurants.filter((restaurant) =>
        restaurant.categories.find((category) => category.id === selectedCategory.id),
      )
    : restaurants
}

// Sort restaurants
export const sortRestaurants = (
  restaurants: Restaurant[],
  sortBy: SortRestaurantsBy,
): Restaurant[] => {
  switch (sortBy.key) {
    case 'favoritesCount':
      return [...restaurants].sort((res1, res2) =>
        sortBy.sort === 'asc'
          ? res1.favoritesCount - res2.favoritesCount
          : res2.favoritesCount - res1.favoritesCount,
      )
    case 'duration':
      return [...restaurants].sort((res1, res2) =>
        sortBy.sort === 'asc'
          ? res1.duration[0] - res2.duration[0]
          : res2.duration[0] - res1.duration[0],
      )

    default:
      return restaurants
  }
}
