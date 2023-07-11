import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLElement> {
  text: string
}

export default function CardSubtitle({ text, ...rest }: Iprops) {
  return (
    <span
      {...rest}
      className={twMerge('text-xs text-zinc-500 md:text-base', rest.className)}
    >
      {text}
    </span>
  )
}
