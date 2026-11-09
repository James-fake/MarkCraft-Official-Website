import { siteConfig } from '../config/siteConfig'
import { IconMark } from '../components/ui/icons'

const EXT = ' ↗'

/**
 * B11 Footer（族 J）。
 * 品牌句 + 导航组（6 锚点）+ 仓库组（下载 / 源码 / 安装包）。
 * 两个法律链接落点待确认，以 mono 显式标注，不伪装成可用链接。
 */
export function FooterSection() {
  return (
    <footer className="mc-footer">
      <div className="mc-container">
        <div className="mc-footer__top">
          <div>
            <div className="mc-footer__brand">
              <IconMark />
              {siteConfig.name}
            </div>
            <p className="mc-footer__tag">本地优先，没有云端账号。</p>
          </div>

          <nav className="mc-footer__col" aria-label="页脚导航">
            <h4>产品</h4>
            {siteConfig.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mc-footer__col">
            <h4>仓库</h4>
            <a href="#download">下载</a>
            <a href={siteConfig.sourceRepo} target="_blank" rel="noopener noreferrer">
              源码仓库<span className="mc-sr">在新标签页打开</span>
              {EXT}
            </a>
            <a href={siteConfig.installerRepo} target="_blank" rel="noopener noreferrer">
              安装包仓库<span className="mc-sr">在新标签页打开</span>
              {EXT}
            </a>
          </div>
        </div>

        <div className="mc-footer__bottom">
          <span>© {siteConfig.copyrightYear} {siteConfig.name}. 保留所有权利。</span>
        </div>
      </div>
    </footer>
  )
}
