import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary'

type Props = {
  children: ReactNode
  variant?: Variant
  /** 站内或外链地址；提供则渲染为 <a>，否则渲染 <button> */
  href?: string
  /** 外链：附加 target=_blank rel=noopener noreferrer 与 ↗ 指示 */
  external?: boolean
  className?: string
}

/**
 * 基础按钮 —— 主按钮实底（深字）、次按钮描边。
 * 外链变体带 ↗ 与屏幕阅读器提示，但不加装饰性图标。
 */
export function Button({
  children,
  variant = 'primary',
  href,
  external = false,
  className,
}: Props) {
  const cls = `mc-btn mc-btn--${variant}${className ? ` ${className}` : ''}`

  if (href) {
    return (
      <a
        className={cls}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
        {external && (
          <>
            <span className="mc-btn__ext" aria-hidden="true">
              ↗
            </span>
            <span className="mc-sr">在新标签页打开</span>
          </>
        )}
      </a>
    )
  }

  return (
    <button className={cls} type="button">
      {children}
    </button>
  )
}
