'use client'

import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { orderActions, selectOrderCartItems } from '@/app/store/order/order-slice'
import { IProduct, TCartItems } from '@/app/types'
import { ChangeEventHandler, useEffect, useState } from 'react'
import Button from '../ui/button'

type TAddProductToCartWidgetProps = {
  product: IProduct
}

export default function AddProductToCartWidget({ product }: TAddProductToCartWidgetProps) {
  const cartItems: TCartItems = useAppSelector(selectOrderCartItems)
  const [quantity, setQuantity] = useState(0)

  const dispatch = useAppDispatch()

  const decrementQuantity = () => {
    changeQuantity(quantity > 0 ? quantity - 1 : 0)
  }

  const incrementQuantity = () => {
    changeQuantity(quantity + 1)
  }

  const onQuantityChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    let value = parseInt(e.target.value)

    if (Number.isNaN(value) || value < 0) {
      value = 0
    }

    changeQuantity(value)
  }

  const changeQuantity = (quantity: number) => {
    setQuantity(quantity)

    if (quantity > 0) {
      dispatch(orderActions.addOrUpdateCartItem({ product, quantity }))
    } else {
      dispatch(orderActions.removeFromCart({ product }))
    }
  }

  const onBuyButtonClick = () => {
    changeQuantity(1)
  }

  useEffect(() => {
    setQuantity(cartItems[product.id] ? cartItems[product.id].quantity : 0)
  }, [cartItems])

  return quantity ? (
    <div className="grid grid-cols-4 gap-1 sm:gap-2">
      <Button onClick={decrementQuantity}>-</Button>
      <input
        type="number"
        min={0}
        value={quantity}
        onChange={onQuantityChange}
        className="col-span-2 rounded-lg bg-current-800 text-current-100 text-2xl p-2 text-center"
      />
      <Button onClick={incrementQuantity}>+</Button>
    </div>
  ) : (
    <Button onClick={onBuyButtonClick} className="w-full">
      Buy
    </Button>
  )
}
