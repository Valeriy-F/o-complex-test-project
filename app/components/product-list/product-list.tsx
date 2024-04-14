'use client'

import { useApiGetProducts } from '@/app/hooks/use-api'
import { IProduct } from '@/app/types'
import { useEffect, useState } from 'react'
import ProductListItem from './product-list-item'
import Loading from "../ui/loading"

const PER_PAGE = 20

export default function ProductList() {
  const { getProducts, isLoading } = useApiGetProducts()
  const [products, setProducts] = useState<IProduct[]>([])
  const [page, setPage] = useState(1)

  const fetchProducts = async () => {
    const productsResponse = await getProducts(page, PER_PAGE)

    if (productsResponse) {
      setProducts((prevState) => [...prevState, ...productsResponse.products])
    }
  }

  const onAppearanceInViewPort = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    fetchProducts()
  }, [page])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
      {products.map((product, index) => {
        const isLastInList = index === products.length - 1

        return (
          <ProductListItem
            key={product.id}
            product={product}
            isLastInList={isLastInList}
            onAppearanceInViewPort={isLastInList ? onAppearanceInViewPort : undefined}
          />
        )
      })}
      {isLoading && <Loading />}
    </div>
  )
}
