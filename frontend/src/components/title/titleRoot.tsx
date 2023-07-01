import { ReactNode } from 'react'

interface Iprops {
  children: ReactNode
}

export default function TitleRoot({ children }: Iprops) {
  return <div>{children}</div>
}
