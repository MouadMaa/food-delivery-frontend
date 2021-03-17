import { Restaurant, SortRestaurantsBy } from './restaurant.types'
import { Category } from '../category/category.types'

// Replace restaurant categoriesIds with categories
export const populateRestaurantsWithCategories = (
  restaurants: Restaurant[],
  categories: Category[],
): Restaurant[] => {
  return restaurants.map((restaurant) => {
    const newCategories = (restaurant.categories as unknown[]).map((categoryId) => {
      return categories.find((category) => category.id === categoryId) as Category
    })
    return { ...restaurant, categories: newCategories }
  })
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

export const sortRestaurantSubCollectionsByOrder = (restaurant: Restaurant): Restaurant => {
  let { dishes } = restaurant

  // Sort dishes
  dishes = dishes.sort((dish1, dish2) => dish1.order - dish2.order)

  // Sort Foods
  for (const dish of dishes) {
    dish.foods = dish.foods.sort((food1, food2) => food1.order - food2.order)

    // Sort Choices
    for (const food of dish.foods) {
      food.choices = food.choices.sort((choice1, choice2) => choice1.order - choice2.order)
    }
  }

  return { ...restaurant, dishes }
}
