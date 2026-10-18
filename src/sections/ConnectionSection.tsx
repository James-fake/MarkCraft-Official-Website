import { Container } from '../components/layout/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Constellation } from '../features/manuscript/Constellation'

/**
 * 屏幕 04 — The Connection / 知识连接
 *
 * 用**发丝级 SVG 星图**（节点与关系取自 `demoNotes`）替代早前的知识图谱截图。
 * 深色章节通过覆写颜色令牌复用同一组件 —— 星图在明暗两种底色下是同一套几何。
 */
const items = [
  { t: '双向链接', d: '笔记互相引用，形成可见的关系。' },
  { t: '反向链接', d: '看到哪些内容正在引用当前笔记。' },
  { t: '知识图谱', d: '把局部连接汇聚成整体网络。' },
]

export function ConnectionSection() {
  return (
    <section className="mc-section mc-connection" id="connection">
      <Container>
        <div className="mc-connection__grid">
          <div className="mc-connection__copy">
            <SectionTitle
              titleEn="A note is never alone."
              title="每一条笔记，都可能通向另一条"
              lead="双向链接、反向链接与知识图谱帮助你看见内容之间的关系，让分散的记录逐渐形成可探索的知识网络。"
              size="large"
            />
            <ul className="mc-connection__list">
              {items.map((i) => (
                <li key={i.t}>
                  <strong>{i.t}</strong>
                  <span>{i.d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mc-connection__viz">
            <Constellation focusId="still-frame" />
          </div>
        </div>
      </Container>
    </section>
  )
}
