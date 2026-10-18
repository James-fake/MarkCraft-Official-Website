import { useLayoutEffect } from 'react'

/**
 * 需要「滚动入场」的区块。
 *
 * 用选择器集中管理，而不是在每个组件里写 `data-reveal` —— 想调参与其改十处，不如改这一行。
 * 选中粒度刻意保持在「章节标题 + 该节的主视觉块」，避免逐元素入场造成的碎片感。
 */
const REVEAL_SELECTOR = [
  '.mc-section-title',
  '.mc-workflow__stages',
  '.mc-spread',
  '.mc-connection__viz',
  '.mc-possibility__blocks',
  '.mc-themes > li',
  '.mc-export',
  '.mc-local__list',
  '.mc-local__tree',
  '.mc-faq__list',
  '.mc-download__meta',
  '.mc-download__channels',
].join(', ')

/**
 * 滚动入场。
 *
 * - 用 `useLayoutEffect` 在**首帧绘制之前**打上 `data-reveal`，因此不会有「先显示再隐藏」的闪烁；
 * - 隐藏态挂在 `.js-reveal` 之下（见 global.css），JS 未启用时内容照常可见；
 * - 进入视口一次即 `unobserve`，不做反复触发；
 * - `prefers-reduced-motion` 下直接全部显示，不播动画。
 */
export function useReveal() {
  useLayoutEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    if (!els.length) return

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }

    els.forEach((el) => el.setAttribute('data-reveal', ''))

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.01 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
