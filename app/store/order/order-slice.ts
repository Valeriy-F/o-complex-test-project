import { ICartItem, IOrder } from '@/app/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TRootState } from "../store"

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
    },
    addOrUpdateCartItem(state, { payload: { id, quantity } }: PayloadAction<ICartItem>) {
      if (id in state.cart.items) {
        state.cart.items[id].quantity = quantity
      } else {
        state.cart.items[id] = { id, quantity }
      }

      setToStorage(state)
    },
    removeFromCart(state, { payload: { id } }: PayloadAction<Pick<ICartItem, 'id'>>) {
      if (!(id in state.cart.items)) {
        return
      }

      delete state.cart.items[id]

      setToStorage(state)
    },
  },
})

export const orderActions = orderSlice.actions
export const orderReducer = orderSlice.reducer
export const selectOrderCartItems = (state: TRootState) => state.orderReducer.cart.items
