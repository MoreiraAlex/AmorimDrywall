import { ReactNode } from 'react'

interface Iprops {
  children: ReactNode
  title: string
  subtitle: string
}

export default function CardHeader({ children, title, subtitle }: Iprops) {
  return (
    <div className="flex flex-grow items-center justify-center gap-4">
      <i className="text-4xl">{children}</i>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white">{title}</span>
        <span className="text-zinc-500">{subtitle}</span>
      </div>
    </div>
  )
}
