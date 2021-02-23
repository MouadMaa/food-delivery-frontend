import { FC, Fragment } from "react"
import { GetStaticProps } from "next"

import { fetchCategories } from "@/store/category/category.firebase"
import { fetchRestaurants } from "@/store/restaurant/restaurant.firebase"
import { Category } from "@/store/category/category.types"
import { Restaurant } from "@/store/restaurant/restaurant.types"
import Categories from "@/components/home/categories/categories.component"
import Restaurants from "@/components/home/restaurants/restaurants.component"

interface HomeProps {
  categories: Category[]
  restaurants: Restaurant[]
}

const Home: FC<HomeProps> = (props) => {
  const { categories, restaurants } = props

  return (
    <Fragment>
      <Categories categories={categories} />
      <Restaurants restaurants={restaurants} />
    </Fragment>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const categories = await fetchCategories()
  const restaurants = await fetchRestaurants(categories)

  return {
    revalidate: 60,
    props: {
      categories,
      restaurants,
    },
  }
}
