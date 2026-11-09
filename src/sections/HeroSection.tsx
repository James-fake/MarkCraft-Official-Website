import { Button } from '../components/buttons/Button'
import { SchematicFigure } from '../components/ui/SchematicFigure'

/**
 * B2 Hero（id #top，族 A）。
 * 恰好 4 个文案文本元素：H1、副文、主 CTA、次文字链。
 * 图占位标注与 figcaption 属图形标注位，不计入文案元素与 CTA 计数。
 */
export function HeroSection() {
  return (
    <section className="mc-hero" id="top">
      <div className="mc-container">
        <div className="mc-hero__grid">
          <div className="mc-hero__copy">
            <h1 className="mc-hero__title">
              你的知识库，<em>存在你自己的磁盘上</em>
            </h1>
            <p className="mc-hero__sub">
              MarkCraft 是 Windows 桌面端的 Markdown 知识库。双向链接、双链图谱、白板与博客工坊。
            </p>
            <div className="mc-hero__cta">
              <Button variant="primary" href="#statement">
                了解功能
              </Button>
              <a className="mc-hero__textlink" href="#faq">
                查看常见问题
              </a>
            </div>
          </div>
          <div className="mc-hero__media">
            <SchematicFigure
              variant="editor"
              ariaLabel="MarkCraft 编辑器主视图示意图，抽象示意，非真实截图"
              figcaption="编辑器主视图（示意）"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
