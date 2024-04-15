import { useEffect, useRef } from 'react'
import Image from 'next/image'

import { IProduct } from '@/app/types'

import AddProductToCartWidget from '../add-product-to-cart-widget/add-product-to-cart-widget'
import Card from '../ui/card'
import Price from '../ui/price'

type TProductListItemProps = {
  product: IProduct
  isLastInList?: boolean
  onAppearanceInViewPort?: () => void
}

export default function ProductListItem({
  product,
  isLastInList = false,
  onAppearanceInViewPort,
}: TProductListItemProps) {
  const cardRef = useRef(null)

  useEffect(() => {
    if (!cardRef?.current) {
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (isLastInList && entry.isIntersecting) {
        onAppearanceInViewPort && onAppearanceInViewPort()

        observer.unobserve(entry.target)
      }
    })

    observer.observe(cardRef.current)
  }, [isLastInList])

  return (
    <Card ref={cardRef}>
      <div className="w-full min-h-[350px] sm:min-h-[450px] md:min-h-[550px] flex justify-center relative">
        <Image
          src={product.image_url}
          alt={product.title}
          fill={true}
          className="rounded-lg w-auto h-auto"
          objectFit="contain"
        />
      </div>
      <div className="font-semibold text-2xl text-center break-all">{product.title}</div>
      <div className="justify-self-start break-all">{product.description}</div>
      <div className="text-2xl">
        Price: <Price value={product.price} currency="RUB" />
      </div>
      <div className="h-full grid grid-cols-1 items-end">
        <AddProductToCartWidget product={product} />
      </div>
    </Card>
  )
}
