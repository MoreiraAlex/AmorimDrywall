import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}

export default function TitleH3({ children, ...rest }: Iprops) {
  return (
    <h3
      {...rest}
      className={twMerge('text-xl text-light md:text-2xl', rest.className)}
    >
      {children}
    </h3>
  )
}
