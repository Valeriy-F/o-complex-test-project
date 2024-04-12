import { IProduct } from '@/app/types'

type TProductListItemProps = {
  product: IProduct
}

export default function ProductListItem({ product }: TProductListItemProps) {
  return (
    <div className="bg-current-200 rounded-lg grid auto-rows-max grid-cols-1 gap-2 sm:gap-4 justify-items-center p-2 sm:p-3 lg:p-4">
      <div className="w-full h-max flex justify-center">
        <img src={product.image_url} alt={product.title} height="100%" className="rounded-lg"></img>
      </div>
      <div className="font-semibold text-2xl text-center break-all">{product.title}</div>
      <div className="justify-self-start break-all">{product.description}</div>
      <div className="text-2xl">Price: {product.price}&#8381;</div>
    </div>
  )
}
