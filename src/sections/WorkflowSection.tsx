import { Container } from '../components/layout/Container'

/**
 * 屏幕 02 — Product Statement / 从工具到工作流（蓝图 §5.2）
 * 三阶段叙事：记录 → 连接 → 创作。
 */
const stages = [
  { step: '01', title: '记录', desc: '从一条观察、一段摘录开始。' },
  { step: '02', title: '连接', desc: '通过链接、标签与图谱，让不同时间写下的内容发生联系。' },
  { step: '03', title: '创作', desc: '把这些联系变成新的理解与作品。' },
]

export function WorkflowSection() {
  return (
    <section className="mc-section mc-workflow" id="statement">
      <Container>
        <p className="mc-workflow__lead">
          笔记不必停留在被保存的那一刻。
          <br />
          它们可以彼此连接，也可以成为下一篇作品的起点。
        </p>
        <ol className="mc-workflow__stages">
          {stages.map((s) => (
            <li key={s.step} className="mc-workflow__stage">
              <span className="mc-workflow__step">{s.step}</span>
              <h3 className="mc-workflow__title">{s.title}</h3>
              <p className="mc-workflow__desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
