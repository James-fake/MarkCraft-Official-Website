import { Container } from '../components/layout/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { ManuscriptPage } from '../features/manuscript/ManuscriptPage'

/**
 * 屏幕 03 — The Craft / 双引擎编辑
 *
 * 不再用两张产品截图对照，而是把**同一份 Markdown** 的两种视图并置成跨页：
 * 左侧是源码（含 `#` `>` `-` `[[ ]]` 语法标记），右侧是渲染结果。
 * 内容同源 → 「两种模式，一份文档」这个论点无需解释即可自证。
 */
export function CraftSection() {
  return (
    <section className="mc-section mc-craft" id="craft">
      <Container>
        <SectionTitle
          titleEn="Write the way you think."
          title="用适合自己的方式表达"
          lead="在 Markdown 源码与所见即所得编辑之间自然切换。需要精确控制时，直接编辑语法；需要专注表达时，让内容更直观地成形。"
        />

        <div className="mc-spread">
          <div className="mc-spread__pane">
            <span className="mc-spread__label">
              <span className="mc-spread__dot" />
              源码模式
            </span>
            <ManuscriptPage mode="source" />
          </div>
          <div className="mc-spread__pane">
            <span className="mc-spread__label">
              <span className="mc-spread__dot" />
              所见即所得
            </span>
            <ManuscriptPage mode="rendered" />
          </div>
        </div>

        <p className="mc-craft__caption">同一份 Markdown 文档 —— 左边是它的源码，右边是它渲染后的样子。</p>
      </Container>
    </section>
  )
}
