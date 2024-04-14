import { IProduct } from '@/app/types'
import { useEffect, useRef } from 'react'
import AddProductToCartWidget from '../add-product-to-cart-widget/add-product-to-cart-widget'
import Card from '../ui/card'
import Price from '../ui/price'

type TProductListItemProps = {
  product: IProduct
  isLastInList?: boolean
  onAppearanceInViewPort?: () => void
}

export default function ProductListItem({ product, isLastInList = false, onAppearanceInViewPort }: TProductListItemProps) {
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
      <div className="w-full h-max flex justify-center">
        <img src={product.image_url} alt={product.title} height="100%" className="rounded-lg"></img>
      </div>
      <div className="font-semibold text-2xl text-center break-all">{product.title}</div>
      <div className="justify-self-start break-all">{product.description}</div>
      <div className="text-2xl">
        Price: <Price value={product.price} currency="RUB" />
      </div>
      <div>
        <AddProductToCartWidget product={product} />
      </div>
    </Card>
  )
}
