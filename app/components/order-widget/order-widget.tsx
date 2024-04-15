'use client'

import { useEffect, useState } from 'react'

import { useApiOrderSubmit } from '@/app/hooks/use-api'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { orderActions, selectOrderCartItems, selectOrderPhoneNumber } from '@/app/store/order/order-slice'
import { TCartItems } from '@/app/types'

import CartItemList from '../cart/cart-item-list'
import Button from '../ui/button'
import Card from '../ui/card'
import Loading from '../ui/loading'
import Modal from '../ui/modal'
import PhoneNumber, { TOnPhoneNumberChangeHandler } from '../ui/phone-number'

export default function OrderWidget() {
  const [cartItems, setCartItems] = useState<TCartItems | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useAppDispatch()
  const phoneNumber = useAppSelector(selectOrderPhoneNumber)
  const orderCartItems: TCartItems = useAppSelector(selectOrderCartItems)
  const { submitOrder, isLoading, error } = useApiOrderSubmit()

  const onPhoneNumberChange: TOnPhoneNumberChangeHandler = (phoneNumber, isValid) => {
    dispatch(orderActions.setPhoneNumber(phoneNumber))
  }

  useEffect(() => {
    setCartItems(orderCartItems)
  }, [orderCartItems])

  const isCartNotEmpty = cartItems && Object.keys(cartItems).length
  const isOrderValid = phoneNumber && String(phoneNumber).length === 11 && isCartNotEmpty

  const onOrderButtonClick = async () => {
    if (!isOrderValid) {
      return
    }

    await submitOrder({
      phoneNumber,
      cart: {
        items: cartItems,
      },
    })

    dispatch(orderActions.clearCart())
    setIsModalOpen(true)
  }

  return (
    <>
      <Card className="md:w-3/4">
        <div className="grid grid-cols-1 gap-4">
          <div className="text-2xl">{isCartNotEmpty ? 'Added products' : 'Cart is empty'}</div>
          {cartItems ? <CartItemList items={cartItems} /> : <Loading />}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <PhoneNumber value={phoneNumber} className="w-full" onChange={onPhoneNumberChange} />
            <Button disabled={!isOrderValid || isLoading} onClick={onOrderButtonClick}>
              {isLoading ? 'Loading...' : 'Order'}
            </Button>
          </div>
        </div>
      </Card>
      {isModalOpen && (
        <Modal
          close={() => {
            setIsModalOpen(false)
          }}
        >
          {error ? 'Error occurred during sending order :-(' : 'Order sent successfully :-)'}
        </Modal>
      )}
    </>
  )
}
