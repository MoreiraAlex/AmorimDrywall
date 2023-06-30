import { ReactNode } from 'react'

interface Iprops {
  children: ReactNode
  title: string
  subtitle: string
}

export default function CardHeader({ children, title, subtitle }: Iprops) {
  return (
    <div className="flex flex-grow items-center justify-center gap-4">
      <i className="text-2xl md:text-4xl">{children}</i>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-white md:text-lg">{title}</span>
        <span className="text-xs text-zinc-500 md:text-base">{subtitle}</span>
      </div>
    </div>
  )
}
