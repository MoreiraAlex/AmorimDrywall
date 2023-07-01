import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export default function ButtonRoot({ children, ...rest }: Iprops) {
  return (
    <button
      {...rest}
      className={twMerge(
        'group flex items-center justify-center gap-2 rounded border border-base p-2 transition hover:bg-base sm:p-4',
        rest.className
      )}
    >
      {children}
    </button>
  )
}
