import type { ReactNode } from 'react'
import {
  IconCommand,
  IconSource,
  IconSync,
  IconWysiwyg,
} from '../components/ui/icons'

type Row = {
  icon: ReactNode
  name: string
  desc: string
}

const rows: Row[] = [
  {
    icon: <IconSource />,
    name: 'CodeMirror 6 源码',
    desc: '直接编辑 Markdown 语法标记，精确控制每一处结构。',
  },
  {
    icon: <IconWysiwyg />,
    name: 'Tiptap 3 所见即所得',
    desc: '在渲染后的页面上直接修改，语法由编辑器维护。',
  },
  {
    icon: <IconSync />,
    name: '同源切换',
    desc: '两种模式读写同一份 .md 文件，切换不产生副本。',
  },
  {
    icon: <IconCommand />,
    name: '命令面板',
    desc: '⌘K 唤起，常用操作与跳转不依赖鼠标。',
  },
]

/**
 * B4 Craft（id #craft，族 C）。
 * 左列说明「同一份 Markdown、两种视图」，右列四行能力。
 */
export function CraftSection() {
  return (
    <section className="mc-section mc-craft" id="craft">
      <div className="mc-container">
        <div className="mc-craft__grid">
          <aside className="mc-craft__aside">
            <h2 className="mc-h2 mc-craft__title">同一份 .md 文件，两种视图</h2>
            <p className="mc-craft__lead">
              源码与所见即所得共用同一份 Markdown。切换的是呈现方式，不是另一份内容。
            </p>
          </aside>
          <div className="mc-craft__rows">
            {rows.map((r) => (
              <div className="mc-craft__row" key={r.name}>
                <div className="mc-craft__row-name">
                  {r.icon}
                  <span>{r.name}</span>
                </div>
                <p className="mc-craft__row-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
