import { Category } from 'redux/category/category.types'
import { Restaurant } from './restaurant.types'

interface RestaurantResponse extends Omit<Restaurant, 'categories'> {
	categories: string[] | Category[]
}

interface PopulateRestaurantWithCategoriesProps {
	restaurants: RestaurantResponse[]
	categories: Category[]
}

export const populateRestaurantWithCategories = ({
	restaurants,
	categories,
}: PopulateRestaurantWithCategoriesProps) => {
	// Replace restaurant categoriesIds with categories
	return restaurants.map((restaurant) => ({
		...restaurant,
		categories: (restaurant.categories as string[]).map((categoryId) => {
			return categories.find((category) => category.id === categoryId)
		}),
	}))
}
