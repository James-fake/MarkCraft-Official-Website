import { Navigation } from '../components/navigation/Navigation'
import { useReveal } from '../hooks/useReveal'
import { HeroSection } from '../sections/HeroSection'
import { WorkflowSection } from '../sections/WorkflowSection'
import { CraftSection } from '../sections/CraftSection'
import { ConnectionSection } from '../sections/ConnectionSection'
import { PossibilitySection } from '../sections/PossibilitySection'
import { OutputSection } from '../sections/OutputSection'
import { LocalSection } from '../sections/LocalSection'
import { FaqSection } from '../sections/FaqSection'
import { DownloadSection } from '../sections/DownloadSection'
import { FooterSection } from '../sections/FooterSection'

/**
 * MarkCraft 官网首页 —— 长篇沉浸式滚动叙事。
 *
 * 叙事漏斗（2026-10-15 扩展）：
 *   概念 → 为什么 → 怎么用 → 连接 → 能做什么 → 输出 → **信任（本地优先）** → **答疑** → 行动
 *
 * 后两节（本地优先 / FAQ）是这次新增的：对本地优先的桌面应用来说，
 * 「数据在哪、要不要联网、能不能带走」是转化前最大的顾虑，必须在下载前回答。
 */
export function App() {
  useReveal()
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <WorkflowSection />
        <CraftSection />
        <ConnectionSection />
        <PossibilitySection />
        <OutputSection />
        <LocalSection />
        <FaqSection />
        <DownloadSection />
      </main>
      <FooterSection />
    </>
  )
}
