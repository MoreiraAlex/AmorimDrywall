import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}

export default function TitleH1({ children, ...rest }: Iprops) {
  return (
    <h1
      {...rest}
      className={twMerge(
        'border-l-2 border-light pl-2 text-3xl text-light md:text-5xl',
        rest.className
      )}
    >
      {children}
    </h1>
  )
}
