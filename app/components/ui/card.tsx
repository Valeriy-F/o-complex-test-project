import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react'

type TCardProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren

export default forwardRef<HTMLDivElement, TCardProps>(function Card(
  { children, className, ...otherProps }: TCardProps,
  ref
) {
  className = `bg-current-200 rounded-lg grid auto-rows-max grid-cols-1 gap-2 sm:gap-4 p-2 sm:p-3 lg:p-4${className && ' ' + className}`

  return (
    <div ref={ref} className={className} {...otherProps}>
      {children}
    </div>
  )
})
