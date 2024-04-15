'use client'

import { useEffect, useState } from 'react'

import { useApiGetProducts } from '@/app/hooks/use-api'
import { IProduct } from '@/app/types'

import Loading from '../ui/loading'

import ProductListItem from './product-list-item'

type TProductListProps = {
  initialProducts?: IProduct[]
  currentPage?: number
}

const PER_PAGE = 20

export default function ProductList({ initialProducts = [], currentPage = 1 }: TProductListProps) {
  const { getProducts, isLoading } = useApiGetProducts()
  const [products, setProducts] = useState<IProduct[]>(initialProducts)
  const [page, setPage] = useState(currentPage)

  const onAppearanceInViewPort = () => {
    setPage(page + 1)
  }

  const fetchProducts = async () => {
    const productsResponse = await getProducts({ page, perPage: PER_PAGE })

    if (productsResponse) {
      setProducts((prevState) => [...prevState, ...productsResponse.products])
    }
  }

  useEffect(() => {
    if (initialProducts.length && page === 1) {
      return
    }

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
