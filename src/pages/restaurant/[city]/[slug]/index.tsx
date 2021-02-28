import { CSSProperties, FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import tw, { css, styled } from 'twin.macro'

import { fetchRestaurant, fetchRestaurants } from '@/store/restaurant/restaurant.firebase'
import { fetchCategories } from '@/store/category/category.firebase'
import { Restaurant as IRestaurant } from '@/store/restaurant/restaurant.types'
import RestaurantDetails from '@/components/restaurant/restaurant-details/restaurant-details.components'
import CategoriesMenu from '@/components/restaurant/categories-menu/categories-menu.component'
import Dishes from '@/components/restaurant/dishes/dishes.component'
import DeliveryAddress from '@/components/restaurant/delivery-address/delivery-address.component'
import Orders from '@/components/restaurant/orders/orders.component'
import OrderButton from '@/components/restaurant/order-button/order-button.component'

interface RestaurantProps {
  restaurant: IRestaurant
}

const Restaurant: FC<RestaurantProps> = (props) => {
  const { restaurant } = props

  return (
    <StyledRestaurant>
      <section>
        <RestaurantDetails restaurant={restaurant} />
        <CategoriesMenu dishes={restaurant.dishes} />
        <Dishes dishes={restaurant.dishes} />
      </section>
      <aside style={asideStyle()}>
        <div>
          <h5>My Orders</h5>
          <DeliveryAddress duration={restaurant.duration} />
          <Orders />
        </div>
        <OrderButton />
      </aside>
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

    > aside {
      ${tw`sticky top-0 z-10 flex justify-between flex-col h-full py-4 px-2 sm:p-4 shadow-lg rounded-3xl`}

      max-height: 80vh;

      > div > h5 {
        ${tw`text-lg tracking-wide text-gray-500 ml-2 mb-4`}
      }
    }
  `,
])

const asideStyle = (): CSSProperties =>
  typeof window !== 'undefined'
    ? {
        maxHeight: `calc(100vh - ${document.querySelector('header').offsetHeight}px)`,
      }
    : {}
