import { ButtonHTMLAttributes } from "react"

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className, ...otherProps }: TButtonProps) {
  let resultClassName = 'rounded-lg bg-current-800 text-current-100 text-2xl px-2 sm:px-4 py-2'

  if (className) {
    resultClassName += ` ${className}`
  }

  return (
    <button className={resultClassName} {...otherProps}>
      {children}
    </button>
  )
}
