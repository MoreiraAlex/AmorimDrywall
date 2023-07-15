import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}

export default function TitleH2({ children, ...rest }: Iprops) {
  return (
    <h2
      {...rest}
      className={twMerge(
        'border-l-2 border-light pl-2 text-2xl text-light md:text-4xl',
        rest.className
      )}
    >
      {children}
    </h2>
  )
}
