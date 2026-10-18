import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type Props = {
  children: ReactNode
  variant?: Variant
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const styles: Record<Variant, string> = {
  primary: 'mc-btn mc-btn--primary',
  secondary: 'mc-btn mc-btn--secondary',
  ghost: 'mc-btn mc-btn--ghost',
}

/** 基础按钮 —— 提供正常/悬停/聚焦/按下状态（蓝图 §6.5） */
export function Button({ children, variant = 'primary', href, ...rest }: Props) {
  const className = styles[variant]
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }
  return (
    <button className={className} type="button" {...rest}>
      {children}
    </button>
  )
}
