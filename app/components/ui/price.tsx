import { TCurrency } from "@/app/types"
import { ReactNode } from "react"

type TPriceProps = {
  value: number
  currency: TCurrency
}

const currencyMapping: Record<TCurrency, ReactNode> = {
  RUB: <span>&#8381;</span>,
  USD: <span>&#36;</span>,
}

export default function Price({ value, currency = 'RUB' }: TPriceProps) {
  return (
    <>
      {value}
      {currencyMapping[currency]}
    </>
  )
}
