import { Button } from '../components/buttons/Button'
import { siteConfig } from '../config/siteConfig'
import { ManuscriptBackdrop } from '../features/manuscript/ManuscriptBackdrop'

/**
 * 屏幕 01 — Hero / The Thought
 *
 * 构图：品牌标题、说明与 CTA 位于**前景安全区**（左），
 * **手稿 × 星图**在后方持续运行 —— 一页被排版的 Markdown 手稿在右上，
 * 它的 `[[链接]]` 长出连线汇入左下的笔记星图，页边同时生成目录。
 *
 * ⚠️ 前景文案与 CTA 保持原样。
 */
export function HeroSection() {
  return (
    <section className="mc-hero" id="top">
      <ManuscriptBackdrop />
      <div className="mc-hero__inner">
        <div className="mc-hero__copy">
          <p className="mc-hero__eyebrow">{siteConfig.name}</p>
          <h1 className="mc-hero__title">{siteConfig.tagline}</h1>
          <p className="mc-hero__title-zh">{siteConfig.taglineZh}</p>
          <p className="mc-hero__desc">
            从一篇 Markdown 笔记开始，连接你的知识，最后把它变成作品。
          </p>
          <div className="mc-hero__cta">
            <Button variant="primary" href={siteConfig.demoPath}>
              体验 Demo
            </Button>
            <Button variant="secondary" href="#download">
              下载 MarkCraft
            </Button>
          </div>
        </div>
      </div>
      <a className="mc-hero__scroll" href="#statement" aria-label="向下探索">
        ↓
      </a>
    </section>
  )
}
