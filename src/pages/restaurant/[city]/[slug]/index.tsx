import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import {
  fetchRestaurant,
  fetchRestaurants,
} from '@/store/restaurant/restaurant.firebase'
import { Restaurant as IRestaurant } from '@/store/restaurant/restaurant.types'

interface RestaurantProps {
  restaurant: IRestaurant
}

const Restaurant: FC<RestaurantProps> = (props) => {
  const { restaurant } = props

  return <pre>{JSON.stringify(restaurant, null, 2)}</pre>
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
  const restaurant = await fetchRestaurant(params.slug as string)
  return { revalidate: 60, props: { restaurant } }
}
