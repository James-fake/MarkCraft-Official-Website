import { siteConfig } from '../config/siteConfig'

/**
 * Footer
 *
 * ⚠️ 页脚导航与顶部导航**共用 `siteConfig.nav`** —— 早前两处各写一套词汇
 * （导航「产品/连接/能力」vs 页脚「编辑/连接/可能/演示」），且页脚的「演示」
 * 实际指向 `#craft`，名不对位。现已统一，并补上「下载」入口。
 */
export function FooterSection() {
  return (
    <footer className="mc-footer">
      <div className="mc-container mc-footer__inner">
        <div className="mc-footer__brand">
          <p className="mc-footer__name">{siteConfig.name}</p>
          <p className="mc-footer__desc">一个让思想成形的地方。</p>
        </div>
        <nav className="mc-footer__links" aria-label="页脚导航">
          {siteConfig.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.labelZh}
            </a>
          ))}
          <a href="#download">下载</a>
          <a href={siteConfig.sourceRepo} target="_blank" rel="noreferrer noopener">
            源码
          </a>
        </nav>
        <p className="mc-footer__copy">
          © {siteConfig.copyrightYear} {siteConfig.name}. 保留所有权利。
        </p>
      </div>
    </footer>
  )
}
