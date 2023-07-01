import { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Iprops extends HTMLAttributes<HTMLElement> {
  icon: ElementType
}
interface Iprops {}

export default function ButtonIcon({ icon: Icon, ...rest }: Iprops) {
  return (
    <Icon
      {...rest}
      className={twMerge(
        'text-2xl text-baseColor transition group-hover:text-white',
        rest.className
      )}
    />
  )
}
