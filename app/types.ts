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
  id: number
  quantity: number
}

export interface ICart {
  items: Record<ICartItem['id'], ICartItem>
}

export interface IOrder {
  phoneNumber: number | null
  cart: ICart
}
