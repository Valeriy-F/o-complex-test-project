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

export type TCartItems = ICart['items']
export type TCurrency = 'RUB' | 'USD'
