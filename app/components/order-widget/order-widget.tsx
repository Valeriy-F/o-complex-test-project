'use client'

import Cart from '../cart/cart'
import Button from "../ui/button"
import Card from '../ui/card'
import PhoneNumber from "../ui/phone-number"

export default function OrderWidget() {
  return (
    <Card className="md:w-3/4">
      <div className="grid grid-cols-1 gap-4">
        <div className="text-2xl">Добавленные товары</div>
        <Cart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PhoneNumber className="w-full" />
          <Button>Заказать</Button>
        </div>
      </div>
    </Card>
  )
}
