'use client'

import Cart from '../cart/cart'
import Card from '../ui/card'

export default function OrderWidget() {
  return (
    <Card className="md:w-3/4">
      <div className="grid grid-cols-1 gap-4">
        <div className="text-2xl">Добавленные товары</div>
        <Cart />
      </div>
    </Card>
  )
}
