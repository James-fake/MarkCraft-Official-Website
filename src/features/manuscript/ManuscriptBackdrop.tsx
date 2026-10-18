import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { FOCUS_INTERVAL_MS, focusAt } from './manuscriptData'
import { ManuscriptPage } from './ManuscriptPage'
import { Constellation } from './Constellation'

/** 尊重减少动态效果偏好 */
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

/**
 * 首屏主视觉的**背景层：手稿 × 星图**。
 *
 * - 一页被排版的手稿（左有页边目录）在右上；
 * - 一簇星图（笔记网络）在左下；
 * - 二者之间用**生长中的发丝线**相连 —— 手稿里的 `[[链接]]` 就是连线的起点；
 * - 一个低频（5.2s）**焦点时钟**把「手稿行 → 页边目录行 → 星图节点」串成一条链；
 * - 无片头/片尾，加载即运行；离屏与后台暂停；`prefers-reduced-motion` 冻结为静态构图。
 *
 * ⚠️ 纯装饰 → `aria-hidden`；动画只走 `transform / opacity / stroke-dashoffset`；
 *    唯一的 JS 状态是 5.2s 一次的焦点索引，不逐帧渲染。
 */
export function ManuscriptBackdrop() {
  const reduced = usePrefersReducedMotion()
  const [k, setK] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [offscreen, setOffscreen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const paused = hidden || offscreen

  useEffect(() => {
    const onVis = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => setOffscreen(!e.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (reduced || paused) return
    const id = window.setInterval(() => setK((i) => i + 1), FOCUS_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [reduced, paused])

  const focus = focusAt(k)

  return (
    <div
      ref={rootRef}
      className={`mc-backdrop${paused ? ' is-paused' : ''}${reduced ? ' is-reduced' : ''}`}
      aria-hidden="true"
    >
      {/* 手稿 → 星图 的连接线（画在手稿**之下**，看起来从纸背后长出来） */}
      <svg className="mc-backdrop__threads" viewBox="0 0 200 120">
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            className="mc-thread"
            style={{ '--i': i } as CSSProperties}
            pathLength={1}
            d={[
              'M198 4 C 138 44, 92 84, 44 116',
              'M198 18 C 150 52, 100 92, 50 120',
              'M198 30 C 160 60, 108 98, 56 120',
              'M198 44 C 168 70, 116 104, 62 120',
            ][i]}
          />
        ))}
      </svg>

      <div className="mc-backdrop__page">
        <ManuscriptPage focus={focus} outline />
      </div>

      <div className="mc-backdrop__const">
        <Constellation focusId={focus.id} />
      </div>

      <div className="mc-backdrop__scrim" />
    </div>
  )
}
