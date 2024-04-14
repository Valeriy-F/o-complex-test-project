'use client'

import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { orderActions, selectOrderCartItems, selectOrderPhoneNumber } from '@/app/store/order/order-slice'
import { TCartItems } from '@/app/types'
import { useEffect, useState } from 'react'
import CartItemList from '../cart/cart-item-list'
import Button from '../ui/button'
import Card from '../ui/card'
import Loading from '../ui/loading'
import PhoneNumber, { TOnPhoneNumberChangeHandler } from '../ui/phone-number'

export default function OrderWidget() {
  const [cartItems, setCartItems] = useState<TCartItems | null>(null)
  const dispatch = useAppDispatch()
  const orderPhoneNumber = useAppSelector(selectOrderPhoneNumber)
  const orderCartItems: TCartItems = useAppSelector(selectOrderCartItems)

  const onPhoneNumberChange: TOnPhoneNumberChangeHandler = (phoneNumber, isValid) => {
    dispatch(orderActions.setPhoneNumber(phoneNumber))
  }

  useEffect(() => {
    setCartItems(orderCartItems)
  }, [orderCartItems])

  const isOrderValid =
    orderPhoneNumber && String(orderPhoneNumber).length === 10 && cartItems && Object.keys(cartItems).length

  return (
    <Card className="md:w-3/4">
      <div className="grid grid-cols-1 gap-4">
        <div className="text-2xl">Добавленные товары</div>
        {cartItems ? <CartItemList items={cartItems} /> : <Loading />}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PhoneNumber value={orderPhoneNumber} className="w-full" onChange={onPhoneNumberChange} />
          <Button disabled={!isOrderValid}>Заказать</Button>
        </div>
      </div>
    </Card>
  )
}
