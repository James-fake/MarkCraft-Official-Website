import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** 是否使用深色章节样式 */
  tone?: 'light' | 'dark'
  id?: string
}

/** 版心容器 */
export function Container({ children, id }: Props) {
  return (
    <div className="mc-container" id={id}>
      {children}
    </div>
  )
}
