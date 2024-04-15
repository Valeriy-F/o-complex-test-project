import { useState } from 'react'

import { decorateRequest, getProducts, postOrder } from '../api/api'
import { IOrder, IPagination, IProductsResponse, IResponse } from '../types'

export function useApiOrderSubmit() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return {
    isLoading,
    error,
    submitOrder: decorateRequest<IOrder, IResponse>(
      postOrder,
      () => {
        setIsLoading(true)
      },
      () => {
        setIsLoading(false)
      },
      (error) => {
        setError(error)
      }
    ),
  }
}

export function useApiGetProducts() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return {
    isLoading,
    error,
    getProducts: decorateRequest<IPagination, IProductsResponse | undefined>(
      getProducts,
      () => {
        setIsLoading(true)
      },
      () => {
        setIsLoading(false)
      },
      (error) => {
        setError(error)
      }
    ),
  }
}
