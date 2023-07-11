import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLElement> {
  text: string
}

export default function CardTitle({ text, ...rest }: Iprops) {
  return (
    <span
      {...rest}
      className={twMerge(
        'text-sm font-bold text-white md:text-lg',
        rest.className
      )}
    >
      {text}
    </span>
  )
}
