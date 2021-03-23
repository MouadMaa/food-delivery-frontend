import type { NextApiRequest, NextApiResponse } from 'next'
import { parseCookies } from 'nookies'

import { db, serverTimestamp } from '@/firebase/firebase'
import { admin } from '@/firebase/firebase.admin'
import { getDocData } from '@/firebase/firebase.utils'
import { TOKEN_NAME } from '@/store/user/user.types'
import { OrderRequest, OrderResponse, OrderedFood } from '@/store/order/order.types'
import { Food } from '@/store/food/food.types'

const orderHandler = (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { method } = req

  switch (method) {
    case 'POST':
      createOrder(req, res)
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default orderHandler

const createOrder = async (req: NextApiRequest, res: NextApiResponse<OrderResponse>) => {
  try {
    // test req data is exists
    if (!req.body.order || !req.body.restaurantId) {
      res
        .status(400)
        .json({ status: 'failure', message: 'order and restaurantId data is required !' })
    }

    // read ordered foods from restaurant collection
    const foods: OrderedFood[] = []
    for await (const o of req.body.order as OrderRequest[]) {
      const foodDoc = await db
        .collection('restaurants')
        .doc(req.body.restaurantId)
        .collection('dishes')
        .doc(o.dishId)
        .collection('foods')
        .doc(o.foodId)
        .get()

      const food = getDocData<Food>(foodDoc)

      foods.push({
        ...food,
        count: o.count,
        dishId: o.dishId,
      })
    }

    // price of delivery man (address)
    const deliveryManPrice = 9 // next version this will be change

    // get current user from cookie
    const token = parseCookies({ req })[TOKEN_NAME]
    const decodedToken = await admin.auth().verifyIdToken(token)

    // create order
    const totalPrice =
      foods.reduce((acc, food) => food.price * food.count + acc, 0) + deliveryManPrice

    const order = {
      createdAt: serverTimestamp(),
      userId: decodedToken.uid,
      userPhone: decodedToken.firebase.identities.phone[0],
      restaurantId: req.body.restaurantId,
      totalPrice,
      foods,
    }

    // store order in firestore orders collection
    const orderId = db.collection('orders').doc()
    orderId.set(order)

    // store order id in current user or user collection
    // ... // next version this will be added

    // send success response
    res.status(200).json({ status: 'success' })
  } catch (error) {
    // send failure response
    res.status(400).json({ status: 'failure', message: error.message })
  }
}
