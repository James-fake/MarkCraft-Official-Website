import type { ReactNode } from 'react'
import { IconImport, IconLink, IconPublish } from '../components/ui/icons'

type Step = {
  icon: ReactNode
  title: string
  desc: string
  mono: string
}

const steps: Step[] = [
  {
    icon: <IconImport />,
    title: '导入',
    desc: '把 .md / .txt / .docx / .html 统一成高质量 GFM，表格语法可用。',
    mono: '.md / .txt / .docx / .html',
  },
  {
    icon: <IconLink />,
    title: '连接',
    desc: '双向链接、反向链接、未链接提及、块引用与嵌套标签，把相关条目连成可探索的网络。',
    mono: 'WikiLink / 反向链接 / 未链接提及',
  },
  {
    icon: <IconPublish />,
    title: '发布',
    desc: '63 套预设主题、12 种导出格式，以及 GitHub / Gitee / Vercel / Cloudflare / Netlify 部署适配。',
    mono: '63 套主题 / 12 种格式 / 5 个部署适配',
  },
]

/**
 * B3 Workflow（id #statement，族 B）。
 * 三格叙事：导入 → 连接 → 发布，全程不需要云端账号。
 */
export function WorkflowSection() {
  return (
    <section className="mc-section mc-workflow" id="statement">
      <div className="mc-container">
        <h2 className="mc-h2 mc-workflow__head">从导入到发布</h2>
        <p className="mc-workflow__lead">
          同一份 .md 文件从导入、连接到发布，全程不需要云端账号。
        </p>
        <div className="mc-track">
          {steps.map((s) => (
            <div className="mc-track__cell" key={s.title}>
              <div className="mc-track__icon">{s.icon}</div>
              <h3 className="mc-track__title">{s.title}</h3>
              <p className="mc-track__desc">{s.desc}</p>
              <p className="mc-track__mono">{s.mono}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
