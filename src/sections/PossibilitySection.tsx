import { Container } from '../components/layout/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { featureGroups } from '../data/featureList'

/**
 * 屏幕 05 — The Possibility / 从知识到作品
 *
 * 这一节刻意**做得安静**：只放能力总览，不放视觉主体。
 * 页面节奏靠「有的章节有大视觉、有的章节只有文字」来拉开 ——
 * 早前每节都是「标题 + 大块视觉」，所以整页读起来平。
 *
 * ⚠️ 原先这里的「已排版成品文章」已移除：它与新增的「主题与导出」节重复。
 */
const COPY = [
  '用视觉方式整理想法与关系。',
  '在已有知识中检索相关段落，并给出摘录式回答。',
  '把笔记整理为可阅读的文章，并预览不同主题。',
  '把内容导出为你需要的格式。',
]

export function PossibilitySection() {
  return (
    <section className="mc-section mc-possibility" id="possibility">
      <Container>
        <SectionTitle
          titleEn="Knowledge wants to move."
          title="让知识继续向前"
          lead="将笔记带入白板、知识检索、文章整理与多格式导出流程，让保存下来的内容拥有更多使用方式。"
        />
        <div className="mc-possibility__blocks">
          {featureGroups
            .find((g) => g.id === 'possibility')!
            .items.map((item, i) => (
              <div className="mc-possibility__block" key={item}>
                <span className="mc-possibility__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item}</h3>
                <p>{COPY[i]}</p>
              </div>
            ))}
        </div>
        <p className="mc-possibility__note">
          功能上线状态以当前发行版本为准；未正式发布的部署能力不会在官网宣传为已上线。
        </p>
      </Container>
    </section>
  )
}
