import { demoNotes, demoArticle } from '../../data/demoNotes'

/**
 * 「手稿 × 星图」视觉语言的**共享数据 + 焦点时钟**。
 *
 * 设计出发点：MarkCraft 是 Markdown 工具 —— 最诚实的视觉就是**把 Markdown 本身排好版**。
 * 因此首屏不再放产品截图，而是渲染一页**活的手稿**（真实 Markdown 语法 + 排版），
 * 由它长出连线、汇成星图、并在页边生成索引。全程只用站点自有字体 + 发丝级 SVG。
 *
 * 与产品同源：笔记与关系仍取自 `data/demoNotes`（id / title / linkedNoteIds）。
 */

/** 焦点切换周期（毫秒）——低频，非逐帧 */
export const FOCUS_INTERVAL_MS = 5200

export type Focus = {
  /** 对应 demoNotes 的笔记 id */
  id: string
  /** 短标签（用于手稿内联链接与星图节点） */
  label: string
  /** 在页边索引里的行号 */
  outlineIndex: number
}

/** 焦点序列：覆盖「编辑 → 连接 → 结构 → 组织」的信息链 */
export const FOCUSES: Focus[] = [
  { id: 'still-frame', label: '静止镜头', outlineIndex: 0 },
  { id: 'space-character', label: '空间与人物', outlineIndex: 1 },
  { id: 'hou-hsiao-hsien', label: '日常时间', outlineIndex: 2 },
  { id: 'long-take', label: '长镜头', outlineIndex: 2 },
  { id: 'observation-to-critique', label: '从观察到影评', outlineIndex: 3 },
]

export function focusAt(index: number): Focus {
  const n = FOCUSES.length
  return FOCUSES[((index % n) + n) % n]
}

/* ------------------------------------------------------------------ */
/* 手稿内容：真实 Markdown 结构（标题 / 引用 / 列表 / 内联链接 / 代码）  */
/* ------------------------------------------------------------------ */

export type ManuscriptLine =
  | { kind: 'h1'; text: string }
  | { kind: 'quote'; text: string }
  | { kind: 'li'; text: string; link: { id: string; label: string } }
  | { kind: 'p'; text: string; link?: { id: string; label: string } }
  | { kind: 'code'; text: string }

export const MANUSCRIPT_TITLE = demoArticle.title

export const MANUSCRIPT_LINES: ManuscriptLine[] = [
  { kind: 'h1', text: demoArticle.title },
  {
    kind: 'p',
    text: '一切的起点，是',
    link: { id: 'still-frame', label: '静止镜头' },
  },
  { kind: 'quote', text: '当摄影机停止运动，画面反而获得重量。' },
  {
    kind: 'li',
    text: '在静止的构图里，',
    link: { id: 'space-character', label: '空间与人物' },
  },
  {
    kind: 'li',
    text: '在长镜头的耐心里，',
    link: { id: 'long-take', label: '长镜头' },
  },
  {
    kind: 'li',
    text: '而侯孝贤让',
    link: { id: 'hou-hsiao-hsien', label: '日常时间' },
  },
  {
    kind: 'p',
    text: '这些观察，最后可以长成一篇',
    link: { id: 'observation-to-critique', label: '影评' },
  },
  { kind: 'code', text: 'const still = frame.hold(8_000)' },
]

/** 页边索引（文章大纲） */
export const MANUSCRIPT_OUTLINE = demoArticle.outline

/* ------------------------------------------------------------------ */
/* 星图：节点与连线的几何（0–100 归一化坐标，便于任意尺寸缩放）        */
/* ------------------------------------------------------------------ */

export type NodeGeo = { id: string; x: number; y: number; r: number }

/**
 * 星图几何（0–100 归一化）。
 *
 * ⚠️ **刻意不对称**：节点距离、角度、半径都不同 —— 真实的知识网络不会长成规整的 X 形，
 * 对称的星形读起来像通用「网络」图标，而不是「你的笔记」。
 */
export const NODES: NodeGeo[] = [
  { id: 'still-frame', x: 46, y: 52, r: 4.6 },
  { id: 'space-character', x: 14, y: 22, r: 3.4 },
  { id: 'hou-hsiao-hsien', x: 88, y: 14, r: 2.6 },
  { id: 'long-take', x: 10, y: 74, r: 3.0 },
  { id: 'observation-to-critique', x: 74, y: 86, r: 3.3 },
]

/** 连线：以 still-frame 为中心（取自 demoNotes.linkedNoteIds） */
export const EDGES: Array<[string, string]> = (() => {
  const center = demoNotes.find((n) => n.id === 'still-frame')
  const ids = new Set(NODES.map((n) => n.id))
  return (center?.linkedNoteIds ?? [])
    .filter((id) => ids.has(id))
    .map((id) => ['still-frame', id] as [string, string])
})()

export function noteTitle(id: string): string {
  return demoNotes.find((n) => n.id === id)?.title ?? id
}

export { demoNotes, demoArticle }
