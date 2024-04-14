'use client'

import { PropsWithChildren } from 'react'

type TOverlayProps = PropsWithChildren

export default function Overlay({ children }: TOverlayProps) {
  return (
    <div className="w-screen h-screen bg-current-900 bg-opacity-40 fixed top-0 right-0 flex justify-center items-center">
      {children}
    </div>
  )
}
