import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export default function ButtonText({ children, ...rest }: Iprops) {
  return (
    <span
      {...rest}
      className={twMerge(
        'text-light transition group-hover:text-white',
        rest.className
      )}
    >
      {children}
    </span>
  )
}
