import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}
export default function CardRoot({ children, ...rest }: Iprops) {
  return (
    <div
      {...rest}
      className={twMerge(
        'flex flex-grow items-center justify-center gap-4',
        rest.className
      )}
    >
      {children}
    </div>
  )
}
