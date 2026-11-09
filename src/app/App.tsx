import { Navigation } from '../components/navigation/Navigation'
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
 * 区块顺序对应 B1（导航）→ B2–B10（内容）→ B11（页脚）。
 */
export function App() {
  return (
    <>
      <a className="mc-skip" href="#statement">
        跳到主内容
      </a>
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
