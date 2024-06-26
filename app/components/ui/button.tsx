import { ButtonHTMLAttributes } from 'react'

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className, ...otherProps }: TButtonProps) {
  let resultClassName =
    'rounded-lg bg-current-800 disabled:bg-current-500 hover:bg-current-900 focus:outline-none focus:ring focus:ring-current-100 text-current-100 disabled:text-current-300 text-md md:text-xl lg:text-2xl px-2 sm:px-4 py-2'

  if (className) {
    resultClassName += ` ${className}`
  }

  return (
    <button className={resultClassName} {...otherProps}>
      {children}
    </button>
  )
}
