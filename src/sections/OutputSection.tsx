import type { CSSProperties } from 'react'
import { Container } from '../components/layout/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { blogThemes, exportFormats, moreThemes, themeTotal } from '../data/blogThemes'

/**
 * 屏幕 06 — The Output / 主题与导出
 *
 * 不放任何截图：每个主题用**它自己的真实配色**渲染一小段排版内容
 * （底色 / 正文 / 强调 / 分隔线四个令牌，取自主仓主题文件），
 * 一眼就能看出差异 —— 这是「用排版展示排版」。
 */
export function OutputSection() {
  return (
    <section className="mc-section mc-output" id="output">
      <Container>
        <SectionTitle
          titleEn="Same words, another light."
          title="换一种呈现，换一种格式"
          lead="同一篇文章可以在不同主题下阅读，也可以导出成你需要的任意格式。样式与内容分开，所以换皮不丢结构。"
        />

        <ul className="mc-themes">
          {blogThemes.map((t) => (
            <li
              key={t.id}
              className="mc-theme"
              style={
                {
                  '--t-bg': t.bg,
                  '--t-fg': t.fg,
                  '--t-accent': t.accent,
                  '--t-border': t.border,
                } as CSSProperties
              }
            >
              <div className="mc-theme__sheet">
                <p className="mc-theme__kicker">长镜头</p>
                <p className="mc-theme__title">静止的画面，流动的时间</p>
                <p className="mc-theme__body">当摄影机停止运动，画面反而获得重量。</p>
                <span className="mc-theme__rule" />
              </div>
              <span className="mc-theme__name">{t.name}</span>
            </li>
          ))}
        </ul>

        <p className="mc-output__more">
          共 {themeTotal} 种预设主题，上图只是其中 6 种；另有 {moreThemes.join('、')} 等。
        </p>

        <div className="mc-export">
          <h3 className="mc-export__label">导出格式</h3>
          <ul className="mc-export__list">
            {exportFormats.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
