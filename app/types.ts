export interface IProduct {
  id: number
  image_url: string
  title: string
  description: string
  price: number
}

export interface IProductsResponse {
  page: number
  amount: number
  total: number
  products: IProduct[]
}

export interface ICartItem {
  product: Pick<IProduct, 'id' | 'title' | 'price'>
  quantity: number
}

export interface ICart {
  items: Record<ICartItem['product']['id'], ICartItem>
}

export interface IOrder {
  phoneNumber: number | null
  cart: ICart
}

export interface IOrderSubmitRequest {
  phone: string
  cart: Array<{
    id: number
    quantity: number
  }>
}

export interface IProductsResponse {
  page: number
  amount: number
  total: number
  items: IProduct[]
}

export interface IFeedback {
  id: number
  text: string
}

export interface IPagination {
  page: number
  perPage: number
}

export interface IResponse {
  success: 0 | 1
  error?: string
}

export type TCartItems = ICart['items']
export type TCurrency = 'RUB' | 'USD'
export type TPaginationProps = Partial<IPagination>
