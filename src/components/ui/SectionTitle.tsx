import type { ReactNode } from 'react'

type Props = {
  /** 英文主标题（编辑感衬线） */
  titleEn?: string
  /** 中文标题 */
  title: string
  /** 引导说明 */
  lead?: ReactNode
  /**
   * 标题层级。
   * 之前所有章节标题都是同一个字号（36px）—— 七节一个声音，所以「像模板」。
   * `large` 用于真正的差异点章节（连接 / 本地优先），让页面有主次。
   */
  size?: 'default' | 'large'
}

/** 章节标题 —— 统一中英层级（蓝图 §3.4） */
export function SectionTitle({ titleEn, title, lead, size = 'default' }: Props) {
  return (
    <header className={`mc-section-title${size === 'large' ? ' mc-section-title--large' : ''}`}>
      {titleEn && <p className="mc-section-title__en">{titleEn}</p>}
      <h2 className="mc-section-title__zh">{title}</h2>
      {lead && <p className="mc-section-title__lead">{lead}</p>}
    </header>
  )
}
