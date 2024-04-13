'use client'

import { useAppSelector } from '@/app/store/hooks'
import { selectOrderCartItems } from '@/app/store/order/order-slice'
import { ICart } from '@/app/types'
import { useEffect, useState } from "react"
import Loading from "../ui/loading"
import Price from "../ui/price"

export default function Cart() {
  const orderCartItems: ICart['items'] = useAppSelector(selectOrderCartItems)
  const [cartItems, setCartItems] = useState<ICart['items'] | null>(null)

  useEffect(() => {
    setCartItems(orderCartItems)
  }, [orderCartItems])

  return cartItems ? (
    <div className="grid grid-col-1 gap-4">
      {Object.values(cartItems).map(({ product, quantity }) => (
        <div key={product.id} className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2">
          <div className="break-all font-semibold">{product.title}</div>
          <div className="grid grid-cols-2">
            <div className="text-lg sm:text-right sm:px-4">x{quantity}</div>
            <div className="text-lg">
              <Price value={product.price * quantity} currency="RUB" />
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Loading />
  )
}
