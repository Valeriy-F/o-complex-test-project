import { configureStore } from '@reduxjs/toolkit'
import { orderReducer } from './order/order-slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      orderReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })
}

export type TAppStore = ReturnType<typeof makeStore>
export type TRootState = ReturnType<TAppStore['getState']>
export type TAppDispatch = TAppStore['dispatch']
