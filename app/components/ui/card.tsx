import { HTMLAttributes, PropsWithChildren } from "react"

type TCardProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>

export default function Card({ children, className, ...otherProps }: TCardProps) {
  className = `bg-current-200 rounded-lg grid auto-rows-max grid-cols-1 gap-2 sm:gap-4 p-2 sm:p-3 lg:p-4${className && ' ' + className}`

  return (
    <div className={className} {...otherProps}>
      {children}
    </div>
  )
}
