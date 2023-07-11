import { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLElement> {
  icon: ElementType
}

export default function CardIcon({ icon: Icon, ...rest }: Iprops) {
  return (
    <Icon
      {...rest}
      className={twMerge('text-2xl md:text-4xl', rest.className)}
    />
  )
}
