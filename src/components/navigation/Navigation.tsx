import { useEffect, useState } from 'react'
import { siteConfig } from '../../config/siteConfig'
import { Button } from '../buttons/Button'

/**
 * 顶部导航 —— 简洁，不设大量下拉菜单（蓝图 §4.2）。
 *
 * 首屏是深色的，导航因此有两态：**悬在首屏上时透明 + 浅色文字**，
 * **滚过首屏后**变为纸色 + 模糊 + 发丝边框。
 * 用 IntersectionObserver 观察首屏（不用 scroll 事件，避免滚动期持续回调）。
 */
export function Navigation() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero || typeof IntersectionObserver === 'undefined') return
    /* 顶部让出导航自身高度：首屏底边越过导航下沿即切换 */
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), {
      rootMargin: '-76px 0px 0px 0px',
      threshold: 0,
    })
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  return (
    <nav className={`mc-nav${solid ? ' is-solid' : ''}`} aria-label="主导航">
      <a className="mc-nav__brand" href="#top">
        MarkCraft
      </a>
      <ul className="mc-nav__links">
        {siteConfig.nav.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.labelZh}</a>
          </li>
        ))}
      </ul>
      <div className="mc-nav__actions">
        <Button variant="primary" href="#download">
          下载应用
        </Button>
      </div>
    </nav>
  )
}
