import { useState } from 'react'
import { IOrder, IProductsResponse } from '../types'

export function useApiOrderSubmit() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return {
    isLoading,
    error,
    submitOrder: async ({ phoneNumber, cart: { items } }: IOrder) => {
      const requestBody = {
        phone: String(phoneNumber),
        cart: Object.values(items).map((cartItem) => ({
          id: cartItem.product.id,
          quantity: cartItem.quantity,
        })),
      }

      try {
        setIsLoading(true)

        const response = await fetch('http://o-complex.com:1337/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(requestBody),
        })

        const result = await response.json()

        if (result.error) {
          throw new Error(result.error)
        }
      } catch (error) {
        setError(error instanceof Error ? error : new Error(JSON.stringify(error)))
      } finally {
        setIsLoading(false)
      }
    },
  }
}

export function useApiGetProducts() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return {
    isLoading,
    error,
    getProducts: async (page = 1, perPage = 20): Promise<IProductsResponse | undefined> => {
      try {
        setIsLoading(true)

        const response = await fetch(`http://o-complex.com:1337/products?page=${page}&page_size=${perPage}`)
        const result = await response.json()

        if (result.error) {
          throw new Error(result.error)
        }

        return result
      } catch (error) {
        setError(error instanceof Error ? error : new Error(JSON.stringify(error)))
      } finally {
        setIsLoading(false)
      }
    },
  }
}
