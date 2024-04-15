'use client'

import { PropsWithChildren } from "react"
import Card from './card'
import Overlay from "./overlay"

type TMoalProps = PropsWithChildren & {
  close: () => void
}

export default function Modal({ children, close }: TMoalProps) {
  return (
    <Overlay>
      <Card>
        <button className="text-right" onClick={close}>
          &#10539;
        </button>
        <div className="text-xl">{children}</div>
      </Card>
    </Overlay>
  )
}
