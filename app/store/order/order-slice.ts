import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICartItem, IOrder } from '@/app/types'

import { TRootState } from '../store'

const STORAGE_KEY = 'order_state'

const initialState: IOrder = {
  phoneNumber: null,
  cart: {
    items: {},
  },
}

const initState = () => {
  if (typeof window === 'undefined') {
    return initialState
  }

  if (!sessionStorage.getItem(STORAGE_KEY)) {
    setToStorage(initialState)

    return initialState
  }

  return JSON.parse(sessionStorage.getItem(STORAGE_KEY) as string)
}

const setToStorage = (state: IOrder) => {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

const orderSlice = createSlice({
  name: 'order',
  initialState: initState(),
  reducers: {
    setPhoneNumber(state, action: PayloadAction<number>) {
      state.phoneNumber = action.payload

      setToStorage(state)
    },
    addOrUpdateCartItem(state, { payload: { product, quantity } }: PayloadAction<ICartItem>) {
      if (product.id in state.cart.items) {
        state.cart.items = { ...state.cart.items, [product.id]: { product, quantity } }
      } else {
        state.cart.items[product.id] = { product, quantity }
      }

      setToStorage(state)
    },
    removeFromCart(state, { payload: { product } }: PayloadAction<Pick<ICartItem, 'product'>>) {
      if (!(product.id in state.cart.items)) {
        return
      }

      delete state.cart.items[product.id]

      setToStorage(state)
    },
    clearCart(state) {
      state.cart = initialState.cart

      setToStorage(state)
    },
  },
})

export const orderActions = orderSlice.actions
export const orderReducer = orderSlice.reducer
export const selectOrderCartItems = (state: TRootState) => state.orderReducer.cart.items
export const selectOrderPhoneNumber = (state: TRootState) => state.orderReducer.phoneNumber
