import { InputHTMLAttributes } from 'react'

type TInputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({ className, ...otherProps }: TInputProps) {
  className = `rounded-lg bg-current-800 focus:bg-current-900 text-current-100 text-md md:text-xl px-2 md:px-4 py-2 caret-transparent focus:outline-current-100${className && ' ' + className}`

  return <input className={className} {...otherProps} />
}
