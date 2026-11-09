import { SchematicFigure } from '../components/ui/SchematicFigure'

const LINES = [
  '白板：8 种卡片，思维导图 / 看板 / 时间线三种视图。',
  '知识库：7 个标签页、4 维健康度，本地统计检索，不调用大模型。',
  '命令面板：⌘K 唤起，搜索、跳转与常用操作走键盘。',
]

/**
 * B6 Possibility（id #possibility，族 E）。
 * 三个模块都不需要登录，主要计算在本机完成。
 */
export function PossibilitySection() {
  return (
    <section className="mc-section mc-possibility" id="possibility">
      <div className="mc-container">
        <div className="mc-possibility__grid">
          <div>
            <h2 className="mc-h2">白板、知识库与命令面板</h2>
            <p className="mc-possibility__lead">
              三个模块都不需要登录，主要计算在本机完成。
            </p>
          </div>
          <div>
            <SchematicFigure
              variant="palette"
              ariaLabel="命令面板 ⌘K 打开态示意图，抽象示意，非真实截图"
              figcaption="命令面板 ⌘K 打开态（示意）"
            />
            <div className="mc-possibility__lines">
              {LINES.map((line) => (
                <p className="mc-possibility__line" key={line}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
