/**
 * 功能清单（集中管理）—— 依据蓝图 §1.3 已知功能范围。
 * ⚠️ 官网上线前应由产品负责人逐项确认发行版本均已实现且稳定。
 */

export type FeatureGroup = {
  id: string
  title: string
  titleEn: string
  summary: string
  /** 用户收益（蓝图 §2.3：功能介绍必须回答「这对用户有什么用」） */
  benefit: string
  items: string[]
}

export const featureGroups: FeatureGroup[] = [
  {
    id: 'craft',
    title: '双引擎编辑',
    titleEn: 'Write the way you think.',
    summary: '源码模式与所见即所得模式在同一套工作流中自然切换。',
    benefit: '需要精确控制时直接编辑语法，需要专注表达时让内容直观成形。',
    items: [
      'CodeMirror 6 源码编辑',
      'Tiptap 3 所见即所得',
      '两模式无缝切换',
      '命令面板与可配置快捷键',
    ],
  },
  {
    id: 'connection',
    title: '知识连接',
    titleEn: 'A note is never alone.',
    summary: '双向链接、反向链接与知识图谱，让分散的记录形成可探索的网络。',
    benefit: '重新发现那些原本分散在不同笔记里的关系。',
    items: ['双向链接 / WikiLink', '反向链接与提及', '块引用与嵌入', '嵌套标签'],
  },
  {
    id: 'possibility',
    title: '从知识到作品',
    titleEn: 'Knowledge wants to move.',
    summary: '把保存下来的内容带入白板、检索、文章整理与多格式导出。',
    benefit: '让一条笔记成为一个想法、一张图、一篇文章，或下一次创作的起点。',
    items: [
      'Canvas v2 白板',
      '知识库检索与问答（本地）',
      '博客工坊与主题',
      '多格式导出',
    ],
  },
]
