import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import tw, { css, styled } from 'twin.macro'

import { fetchRestaurant, fetchRestaurants } from '@/store/restaurant/restaurant.firebase'
import { fetchCategories } from '@/store/category/category.firebase'
import { Restaurant as IRestaurant } from '@/store/restaurant/restaurant.types'
import RestaurantDetails from '@/components/restaurant/restaurant-details/restaurant-details.components'
import DishesCategories from '@/components/restaurant/dishes-categories/dishes-categories.component'
import Dishes from '@/components/restaurant/dishes/dishes.component'

interface RestaurantProps {
  restaurant: IRestaurant
}

const Restaurant: FC<RestaurantProps> = (props) => {
  const { restaurant } = props

  return (
    <StyledRestaurant>
      <section>
        <RestaurantDetails restaurant={restaurant} />
        <DishesCategories dishes={restaurant.dishes} />
        <Dishes dishes={restaurant.dishes} />
      </section>
    </StyledRestaurant>
  )
}

export default Restaurant

export const getStaticPaths: GetStaticPaths = async () => {
  const restaurants = await fetchRestaurants()

  const paths = restaurants.map((restaurant) => ({
    params: { city: 'larache', slug: restaurant.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categories = await fetchCategories()
  const restaurant = await fetchRestaurant(params.slug as string, categories)
  return { revalidate: 60, props: { restaurant } }
}

const StyledRestaurant = styled.section(() => [
  tw`grid grid-cols-1 lg:grid-cols-3`,
  css`
    > section {
      ${tw`col-span-2`};
    }
  `,
])
