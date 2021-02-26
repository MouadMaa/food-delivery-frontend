import { db } from '@/firebase/firebase'
import { getCollectionData, readIds } from '@/firebase/firebase.utils'
import { Food, Restaurant } from './restaurant.types'
import { populateRestaurantsWithCategories } from './restaurant.utils'
import { Category } from '../category/category.types'

const RESTAURANTS_LIMIT = 12
let hasMoreRestaurants = true

export const fetchRestaurants = async (categories?: Category[]): Promise<Restaurant[]> => {
  const restaurantsResponse = await db
    .collection('restaurants')
    .orderBy('favoritesCount', 'desc')
    .limit(RESTAURANTS_LIMIT)
    .get()

  const restaurants = getCollectionData<Restaurant>(restaurantsResponse)

  return categories ? populateRestaurantsWithCategories(restaurants, categories) : restaurants
}

export const fetchMoreRestaurants = async (
  latestRestaurant: Restaurant,
  categories: Category[],
): Promise<Restaurant[]> => {
  if (!hasMoreRestaurants) return null

  const restaurantsResponse = await db
    .collection('restaurants')
    .orderBy('favoritesCount', 'desc')
    .startAfter(latestRestaurant.favoritesCount)
    .limit(RESTAURANTS_LIMIT)
    .get()

  if (restaurantsResponse.empty || restaurantsResponse.size !== RESTAURANTS_LIMIT)
    hasMoreRestaurants = false

  const restaurants = getCollectionData<Restaurant>(restaurantsResponse)

  return populateRestaurantsWithCategories(restaurants, categories)
}

export const fetchRestaurant = async (
  slug: string,
  categories: Category[],
): Promise<Restaurant> => {
  const res = await db.collection('restaurants').where('slug', '==', slug).get()
  const restaurants = getCollectionData<Restaurant>(res)

  const restaurant = populateRestaurantsWithCategories(restaurants, categories)[0]

  const dishesAsync = restaurant.dishes.map(async (dish) => {
    const foods = await readIds<Food>(db.collection('foods'), dish.foods as any)
    return { ...dish, foods }
  })
  const dishes = await Promise.all(dishesAsync)

  return { ...restaurant, dishes }
}
