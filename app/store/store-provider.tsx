'use client'

import { PropsWithChildren, useRef } from 'react'
import { Provider } from 'react-redux'

import { makeStore, TAppStore } from './store'

type TStoreProviderProps = PropsWithChildren

export default function StoreProvider({ children }: TStoreProviderProps) {
  const storeRef = useRef<TAppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
