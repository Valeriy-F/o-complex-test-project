'use client'

import { TCartItems } from '@/app/types'
import Price from '../ui/price'

type TCartItemListProps = {
  items: TCartItems
}

export default function CartItemList({ items }: TCartItemListProps) {
  return (
    <div className="grid grid-col-1 gap-4">
      {Object.values(items).map(({ product, quantity }) => (
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
  )
}
