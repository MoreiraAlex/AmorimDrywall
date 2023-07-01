import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export default function TitleSpan({ children, ...rest }: Iprops) {
  return (
    <span
      {...rest}
      className={twMerge(
        'text-base uppercase text-baseColor md:text-lg',
        rest.className
      )}
    >
      {children}
    </span>
  )
}
