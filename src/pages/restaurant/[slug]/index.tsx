import { FC, useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { fetchRestaurant, fetchRestaurants } from '@/store/restaurant/restaurant.firebase'
import { Restaurant as IRestaurant } from '@/store/restaurant/restaurant.types'
import { useSetOrdersState } from '@/store/order/order.states'
import { StyledRestaurant } from '@/components/restaurant/styled'
import RestaurantDetails from '@/components/restaurant/restaurant-details/restaurant-details.components'
import DishMenu from '@/components/restaurant/dish-menu/dish-menu.component'
import Dishes from '@/components/restaurant/dishes/dishes.component'
import OrderDeliveryAddress from '@/components/restaurant/order-delivery-address/order-delivery-address.component'
import OrdersFood from '@/components/restaurant/orders-food/orders-food.component'
import OrderButton from '@/components/restaurant/order-button/order-button.component'
import MobileOrdersButton from '@/components/restaurant/mobile-orders-button/mobile-orders-button.component'
import FoodModal from '@/components/restaurant/food-modal/food-modal.component'
import OrderTitle from '@/components/restaurant/order-title/order-title.component'

interface RestaurantProps {
  restaurant: IRestaurant
}

const Restaurant: FC<RestaurantProps> = (props) => {
  const { restaurant } = props

  const [showOrders, setShowOrders] = useState(false)

  /**
   * Only For Testing
   */
  const setOrders = useSetOrdersState()
  useEffect(() => {
    setOrders([
      { food: { ...restaurant.dishes[0].foods[0], dishId: restaurant.dishes[0].id }, count: 1 },
      { food: { ...restaurant.dishes[0].foods[1], dishId: restaurant.dishes[0].id }, count: 2 },
      { food: { ...restaurant.dishes[1].foods[0], dishId: restaurant.dishes[1].id }, count: 3 },
    ])
  }, [])
  /*****************/

  const handleClickShowOrders = () => setShowOrders(!showOrders)

  return (
    <StyledRestaurant showOrders={showOrders}>
      <section>
        <RestaurantDetails restaurant={restaurant} />
        <DishMenu dishes={restaurant.dishes} />
        <Dishes dishes={restaurant.dishes} />
      </section>
      <aside>
        <OrderTitle onClick={handleClickShowOrders} />
        <OrderDeliveryAddress duration={restaurant.duration} />
        <OrdersFood />
        <OrderButton restaurantId={restaurant.id} />
      </aside>
      <MobileOrdersButton show={!showOrders} onClick={handleClickShowOrders} />
      <FoodModal imageCover={restaurant.imageCover} />
    </StyledRestaurant>
  )
}

export default Restaurant

export const getStaticPaths: GetStaticPaths = async () => {
  const restaurants = await fetchRestaurants()

  const paths = restaurants.map((restaurant) => ({
    params: { slug: restaurant.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string
  const restaurant = await fetchRestaurant(slug)
  return { revalidate: 600, props: { restaurant } }
}
