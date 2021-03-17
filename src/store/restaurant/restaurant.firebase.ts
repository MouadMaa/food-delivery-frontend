import { db } from '@/firebase/firebase'
import { getCollectionData, readIds } from '@/firebase/firebase.utils'
import { Dish, Restaurant } from './restaurant.types'
import { Choice, Food, Option } from '../food/food.types'
import { Category } from '../category/category.types'
import { populateRestaurantsWithCategories } from './restaurant.utils'

// const RESTAURANTS_LIMIT = 20
// let hasMoreRestaurants = true

export const fetchRestaurants = async (categories?: Category[]): Promise<Restaurant[]> => {
  const restaurantsResponse = await db
    .collection('restaurants')
    .orderBy('favoritesCount', 'desc')
    // .limit(RESTAURANTS_LIMIT)
    .get()

  const restaurants = getCollectionData<Restaurant>(restaurantsResponse)

  return categories ? populateRestaurantsWithCategories(restaurants, categories) : restaurants
}

// export const fetchMoreRestaurants = async (
//   latestRestaurant: Restaurant,
//   categories: Category[],
// ): Promise<Restaurant[]> => {
//   if (!hasMoreRestaurants) return []

//   const restaurantsResponse = await db
//     .collection('restaurants')
//     .orderBy('favoritesCount', 'desc')
//     .startAfter(latestRestaurant.favoritesCount)
//     .limit(RESTAURANTS_LIMIT)
//     .get()

//   if (restaurantsResponse.empty || restaurantsResponse.size !== RESTAURANTS_LIMIT)
//     hasMoreRestaurants = false

//   const restaurants = getCollectionData<Restaurant>(restaurantsResponse)

//   return populateRestaurantsWithCategories(restaurants, categories)
// }

export const fetchRestaurant = async (slug: string): Promise<Restaurant> => {
  // Read restaurant
  const restaurantRef = db.collection('restaurants')
  const restaurantsCollection = await restaurantRef.where('slug', '==', slug).get()
  let restaurant = getCollectionData<Restaurant>(restaurantsCollection)[0]

  // Reads an array of categories (IDs)
  const categoriesIds = restaurant.categories as any[]
  const categoriesRef = db.collection('categories')
  restaurant.categories = await readIds<Category>(categoriesRef, categoriesIds)

  // Read sub collection dishes
  const dishesRef = restaurantRef.doc(restaurant.id).collection('dishes')
  const dishesCollection = await dishesRef.get()
  restaurant.dishes = getCollectionData<Dish>(dishesCollection)

  // Read sub collection foods
  for await (const dish of restaurant.dishes) {
    const foodsRef = dishesRef.doc(dish.id).collection('foods')
    const foodsCollection = await foodsRef.get()
    dish.foods = getCollectionData<Food>(foodsCollection)

    // Read sub collection choices
    for await (const food of dish.foods) {
      const choicesRef = foodsRef.doc(food.id).collection('choices')
      const choicesCollection = await choicesRef.get()
      food.choices = getCollectionData<Choice>(choicesCollection)

      // Read sub collection options
      for await (const choice of food.choices) {
        const optionsRef = choicesRef.doc(choice.id).collection('options')
        const optionsCollection = await optionsRef.get()
        choice.options = getCollectionData<Option>(optionsCollection)
      }
    }
  }

  return restaurant
}
