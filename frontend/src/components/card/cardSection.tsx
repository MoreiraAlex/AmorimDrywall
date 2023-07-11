import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}
export default function CardSection({ children, ...rest }: Iprops) {
  return (
    <div {...rest} className={twMerge('flex flex-col', rest.className)}>
      {children}
    </div>
  )
}
