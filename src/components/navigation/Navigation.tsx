import { useEffect, useState } from 'react'
import { siteConfig } from '../../config/siteConfig'
import { Button } from '../buttons/Button'
import { IconMark } from '../ui/icons'

/**
 * 顶部导航 B1（族 N）。
 * 首屏深色、透明；滚过首屏后变实底发丝边框（is-solid）。
 * 用 IntersectionObserver 观察首屏，避免 scroll 事件持续回调。
 */
export function Navigation() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), {
      rootMargin: '-76px 0px 0px 0px',
      threshold: 0,
    })
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  return (
    <nav className={`mc-nav${solid ? ' is-solid' : ''}`} aria-label="主导航">
      <a className="mc-nav__brand" href="#top" aria-label="MarkCraft 首页">
        <IconMark />
        MarkCraft
      </a>
      <ul className="mc-nav__links">
        {siteConfig.nav.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="mc-nav__actions">
        <Button variant="primary" href="#download">
          下载
        </Button>
      </div>
    </nav>
  )
}
