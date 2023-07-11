import { ReactNode, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export default function TitleRoot({ children, ...rest }: Iprops) {
  return (
    <div {...rest} className={twMerge('', rest.className)}>
      {children}
    </div>
  )
}
