/**
 * Product Film 虚构示例内容（电影与创作主题）—— 蓝图 v1.1 §6.5。
 *
 * ⚠️ 这些是官网动画的示例内容，不代表 MarkCraft 自带该主题知识库。
 * 内容原创、简洁，不引用未经授权的长篇评论（§6.5）。
 */

export type DemoNote = {
  id: string
  title: string
  excerpt: string
  tags: string[]
  /** 关联笔记（用于 Connection 场景的连线） */
  linkedNoteIds: string[]
}

export const demoNotes: DemoNote[] = [
  {
    id: 'still-frame',
    title: '电影中的静止镜头',
    excerpt: '当摄影机停止运动，画面反而获得重量。',
    tags: ['电影语言', '镜头', '创作笔记'],
    linkedNoteIds: ['space-character', 'hou-hsiao-hsien', 'long-take', 'observation-to-critique'],
  },
  {
    id: 'space-character',
    title: '空间如何塑造人物',
    excerpt: '房间的尺度与人物位置，在无声地解释关系。',
    tags: ['电影语言', '空间'],
    linkedNoteIds: ['still-frame'],
  },
  {
    id: 'hou-hsiao-hsien',
    title: '侯孝贤与日常时间',
    excerpt: '他让时间在镜头里自然流过。',
    tags: ['创作笔记', '时间'],
    linkedNoteIds: ['still-frame'],
  },
  {
    id: 'long-take',
    title: '长镜头与观众注意力',
    excerpt: '长镜头是一场关于耐心的谈判。',
    tags: ['镜头', '时间'],
    linkedNoteIds: ['still-frame'],
  },
  {
    id: 'observation-to-critique',
    title: '从观察到影评',
    excerpt: '一条观察，可以长成一篇有结构的影评。',
    tags: ['创作笔记'],
    linkedNoteIds: ['still-frame'],
  },
]

/** 演示输出文章 —— v1.1 §6.5 */
export const demoArticle = {
  title: '静止的画面，流动的时间',
  outline: [
    '静止镜头为何有重量',
    '空间如何塑造人物',
    '日常时间与被拉长的注意力',
    '从观察走向影评',
  ],
}
