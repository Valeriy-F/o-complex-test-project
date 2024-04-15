import { IFeedback, IOrder, IPagination, IProductsResponse, IResponse } from '../types'

export function decorateRequest<TRequstProps = {}, TRequatResult = void>(
  request: (requestProps: TRequstProps) => Promise<TRequatResult>,
  beforeSend?: () => void,
  afterSend?: () => void,
  onError?: (error: Error) => void
) {
  return async function (requestProps: TRequstProps) {
    try {
      beforeSend && beforeSend()

      const result = await request(requestProps)

      afterSend && afterSend()

      return result
    } catch (error) {
      onError && onError(error instanceof Error ? error : new Error(JSON.stringify(error)))
    }
  }
}

export const getProducts = async ({ page, perPage }: IPagination): Promise<IProductsResponse> => {
  const response = await fetch(`http://o-complex.com:1337/products?page=${page}&page_size=${perPage}`)

  return await response.json()
}

export const getFeedbacks = async (): Promise<IFeedback[]> => {
  const response = await fetch(`http://o-complex.com:1337/reviews`)

  return await response.json()
}

export const postOrder = async (order: IOrder): Promise<IResponse> => {
  const {
    phoneNumber,
    cart: { items },
  } = order

  const requestBody = {
    phone: String(phoneNumber),
    cart: Object.values(items).map((cartItem) => ({
      id: cartItem.product.id,
      quantity: cartItem.quantity,
    })),
  }

  const response = await fetch('http://o-complex.com:1337/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(requestBody),
  })

  return await response.json()
}
