import { CSSProperties, FC, useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import tw, { css, styled } from 'twin.macro'

import { fetchRestaurant, fetchRestaurants } from '@/store/restaurant/restaurant.firebase'
import { fetchCategories } from '@/store/category/category.firebase'
import { Restaurant as IRestaurant } from '@/store/restaurant/restaurant.types'
import { useWindowSize } from '@/hooks/useWindowSize'
import { IconButton } from '@/components/ui'
import RestaurantDetails from '@/components/restaurant/restaurant-details/restaurant-details.components'
import CategoriesMenu from '@/components/restaurant/categories-menu/categories-menu.component'
import Dishes from '@/components/restaurant/dishes/dishes.component'
import DeliveryAddress from '@/components/restaurant/delivery-address/delivery-address.component'
import Orders from '@/components/restaurant/orders/orders.component'
import OrderButton from '@/components/restaurant/order-button/order-button.component'
import MobileOrdersButton from '@/components/restaurant/mobile-orders-button/mobile-orders-button.component'
import FoodModal from '@/components/restaurant/food-modal/food-modal.component'

interface RestaurantProps {
  restaurant: IRestaurant
}

const Restaurant: FC<RestaurantProps> = (props) => {
  const { restaurant } = props

  const [show, setShow] = useState('both')

  const { width } = useWindowSize()

  useEffect(() => {
    if (width) setShow(width < 1024 ? 'dishes' : 'both')
  }, [width])

  const handleClickShow = () => {
    if (width) {
      if (width >= 1024) setShow('both')
      else setShow(show === 'dishes' ? 'orders' : 'dishes')
    }
  }

  const dishes = (
    <section key={1}>
      <RestaurantDetails restaurant={restaurant} />
      <CategoriesMenu dishes={restaurant.dishes} />
      <Dishes dishes={restaurant.dishes} />
    </section>
  )

  const orders = (
    <aside key={2} style={asideStyle()}>
      <div>
        <div>
          <span>My Orders</span>
          <IconButton onClick={handleClickShow}>
            <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M17.59 5L12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41 17.59 5z' />
            </svg>
          </IconButton>
        </div>
        <DeliveryAddress duration={restaurant.duration} />
        <Orders />
      </div>
      <OrderButton />
    </aside>
  )

  return (
    <StyledRestaurant fixOrders={show === 'orders'}>
      {show !== 'orders' && dishes}
      {show !== 'dishes' && orders}
      {show !== 'orders' && <MobileOrdersButton onClick={handleClickShow} />}
      <FoodModal imageCover={restaurant.imageCover} />
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
  const slug = params!.slug as string
  const categories = await fetchCategories()
  const restaurant = await fetchRestaurant(slug, categories)
  return { revalidate: 60, props: { restaurant } }
}

const StyledRestaurant = styled.section(({ fixOrders }: { fixOrders: boolean }) => [
  tw`grid grid-cols-1 lg:grid-cols-3`,
  css`
    > section {
      ${tw`col-span-2`};
    }

    > aside {
      ${tw`z-10 flex justify-between flex-col h-full p-2 sm:p-4 shadow-lg rounded-3xl`}

      max-height: 85vh;

      > div > div {
        ${tw`flex items-center justify-between ml-2 mb-4`}

        span {
          ${tw`text-md md:text-lg tracking-wide text-gray-600 dark:text-gray-300`}
        }

        button {
          ${tw`flex lg:hidden`}

          svg {
            ${tw`w-5 h-5 text-gray-400 fill-current`}
          }
        }
      }
    }
  `,
  fixOrders
    ? [
        css`
          > aside {
            ${tw`fixed bottom-0 left-0 right-0`}
          }
        `,
      ]
    : [
        css`
          > aside {
            ${tw`sticky top-0`}
          }
        `,
      ],
])

const asideStyle = (): CSSProperties =>
  typeof window !== 'undefined'
    ? {
        maxHeight: `calc(100vh - ${document.querySelector('header')?.offsetHeight}px)`,
      }
    : {}
