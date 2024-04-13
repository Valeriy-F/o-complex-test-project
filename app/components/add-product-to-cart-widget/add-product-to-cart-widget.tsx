'use client'

import { ChangeEventHandler, EventHandler, FormEventHandler, useState } from 'react'
import Button from "../ui/button"

export default function AddProductToCartWidget() {
  const [quantity, setQquantity] = useState(1)

  const decrementQuantity = () => {
    if (quantity === 1) {
      return
    }

    setQquantity(quantity - 1)
  }

  const incrementQuantity = () => {
    setQquantity(quantity + 1)
  }

  const onQuantityChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    let value = parseInt(e.target.value)

    if (Number.isNaN(value) || value < 1) {
      return
    }

    setQquantity(value)
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      <Button onClick={decrementQuantity}>-</Button>
      <input
        type="number"
        value={quantity}
        onChange={onQuantityChange}
        className="col-span-2 rounded-lg bg-current-800 text-current-100 text-2xl p-2 text-center"
      />
      <Button onClick={incrementQuantity}>+</Button>
    </div>
  )
}
