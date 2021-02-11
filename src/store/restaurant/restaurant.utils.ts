import { Restaurant, RestaurantState } from './restaurant.types'
import { Category } from '../category/category.types'

// Replace restaurant categoriesIds with categories
export const populateRestaurantsWithCategories = (restaurants: Restaurant[], categories: Category[]): Restaurant[] => {
	return restaurants.map((restaurant) => ({
		...restaurant,
		categories: (restaurant.categories as unknown[]).map((categoryId) => {
			return categories.find((category) => category.id === categoryId)
		}),
	}))
}

export const filterAndSortRestaurants = (restaurant: RestaurantState, selectedCategory: Category): Restaurant[] => {
	let newRestaurants = [ ...restaurant.restaurants ]

	// Filter restaurants by category
	if (selectedCategory.id !== 'all') {
		newRestaurants = restaurant.restaurants.filter((restaurant) =>
			restaurant.categories.find((category) => category.id === selectedCategory.id),
		)
	}

	// Sort restaurants
	if (restaurant.sortBy.value === 'favoritesCount') {
		newRestaurants = newRestaurants.sort(
			(res1, res2) =>
				restaurant.sortBy.sort === 'asc'
					? res1.favoritesCount - res2.favoritesCount
					: res2.favoritesCount - res1.favoritesCount,
		)
	} else if (restaurant.sortBy.value === 'duration') {
		newRestaurants = newRestaurants.sort(
			(res1, res2) =>
				restaurant.sortBy.sort === 'asc' ? res1.duration[0] - res2.duration[0] : res2.duration[0] - res1.duration[0],
		)
	}

	return newRestaurants
}
