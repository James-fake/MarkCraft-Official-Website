import type { CSSProperties } from 'react'
import { EDGES, NODES, noteTitle } from './manuscriptData'

type Props = {
  /** 当前焦点笔记 id */
  focusId?: string
  /** 是否显示节点标题 */
  labels?: boolean
  className?: string
}

/** 中心节点 */
const CENTER = 'still-frame'

/**
 * **星图** —— 用发丝级 SVG 画出的笔记网络（替代原先的知识图谱截图）。
 *
 * 节点与关系来自 `demoNotes`（与产品同源的数据结构），坐标在 0–100 归一化空间，
 * 因此可以在首屏背景与正文面板中任意缩放复用。
 *
 * 标签一律用**短称**（全称在正文里给出），否则中文长标题在同一行会互相压叠。
 */
export function Constellation({ focusId, labels = true, className = '' }: Props) {
  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]))

  return (
    <svg
      className={`mc-const ${className}`.trim()}
      viewBox="-6 -6 112 112"
      role="img"
      aria-label="笔记之间的关联网络"
    >
      <g className="mc-const__edges">
        {EDGES.map(([a, b], i) => {
          const p = byId[a]
          const q = byId[b]
          if (!p || !q) return null
          /* 焦点在中心节点时连线保持中性 —— 否则整个网络会一起变绿 */
          const on = focusId !== CENTER && (focusId === a || focusId === b)
          return (
            <line
              key={`${a}-${b}`}
              className={`mc-const__edge${on ? ' is-focus' : ''}`}
              style={{ '--i': i } as CSSProperties}
              pathLength={1}
              x1={p.x}
              y1={p.y}
              x2={q.x}
              y2={q.y}
            />
          )
        })}
      </g>

      <g className="mc-const__nodes">
        {NODES.map((n, i) => {
          const on = n.id === focusId
          const isCenter = n.id === CENTER
          const anchor = n.x > 60 ? 'end' : n.x < 40 ? 'start' : 'middle'
          const dx = anchor === 'end' ? -3 : anchor === 'start' ? 3 : 0
          /* SVG 的 y 是**基线** —— 中心节点要留出半径，否则文字会压在圆点上 */
          const dy = isCenter ? 9.5 : n.y < 30 ? -5 : 7
          return (
            <g
              key={n.id}
              className={`mc-const__node${on ? ' is-focus' : ''}${isCenter ? ' is-center' : ''}`}
              style={{ '--i': i } as CSSProperties}
            >
              <circle className="mc-const__halo" cx={n.x} cy={n.y} r={n.r + 3.2} />
              <circle className="mc-const__dot" cx={n.x} cy={n.y} r={n.r} />
              {labels && (
                <text className="mc-const__label" x={n.x + dx} y={n.y + dy} textAnchor={anchor}>
                  {shortTitle(n.id)}
                </text>
              )}
            </g>
          )
        })}
      </g>
    </svg>
  )
}

const SHORT: Record<string, string> = {
  'still-frame': '静止镜头',
  'space-character': '空间与人物',
  'hou-hsiao-hsien': '日常时间',
  'long-take': '长镜头',
  'observation-to-critique': '从观察到影评',
}

function shortTitle(id: string) {
  return SHORT[id] ?? noteTitle(id).slice(0, 5)
}
