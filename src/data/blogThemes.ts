/**
 * 博客主题与导出格式（官网展示用）。
 *
 * ⚠️ **事实来源**：
 * - 主题名与配色取自主仓 `src/features/blog/themes/*.ts`；
 * - **主题总数**取自主仓 `src/features/blog/hooks/useBlogGenerator.ts` 的
 *   `THEME_INFO_LIST`（当前 **63 种预设主题**，另有 `custom` 自定义项）。
 *   注意：`themes/` 目录下只有 13 个 `.ts` 文件，那是**独立 CSS 生成器**的数量，
 *   不是主题总数——官网曾据此误写「共 13 个主题」。改这里之前先回主仓核对。
 * - 导出格式取自主仓 `src/features/export/saveAsShared.ts` 的 `FORMAT_OPTIONS`（12 种）。
 */

export type ThemeSwatch = {
  /** 主仓里的主题标识（文件名为驼峰，展示用中文名） */
  id: string
  name: string
  /** 页面底色 */
  bg: string
  /** 正文色 */
  fg: string
  /** 强调色 */
  accent: string
  /** 分隔线色 */
  border: string
}

/** 取 6 个视觉差异最大的主题做小样（明 4 / 暗 2） */
export const blogThemes: ThemeSwatch[] = [
  { id: 'inkWash', name: '水墨', bg: '#f5f0e8', fg: '#1a1a1a', accent: '#c23b22', border: '#e8e0d0' },
  { id: 'newspaper', name: '报纸', bg: '#f5f0e1', fg: '#1a1a1a', accent: '#8b0000', border: '#1a1a1a' },
  { id: 'academia', name: '学院', bg: '#faf6ee', fg: '#2c2c2c', accent: '#8b1a1a', border: '#d4c9a8' },
  { id: 'retro', name: '复古', bg: '#f4efe0', fg: '#3d3220', accent: '#cc5500', border: '#d4c9a8' },
  { id: 'midnight', name: '午夜', bg: '#0d1b2a', fg: '#e0e1dd', accent: '#778da9', border: '#1e3048' },
  { id: 'terminal', name: '终端', bg: '#0a0a0a', fg: '#00ff41', accent: '#ffb000', border: '#00ff41' },
]

/** 主仓预设主题总数（`THEME_INFO_LIST.length`，另有 `custom` 自定义项） */
export const themeTotal = 63

/** 除下方 6 个小样外，另外几个有代表性的主题（仅展示用，非全集） */
export const moreThemes = ['极光', '便当格', '叙事', '赛博朋克', '玻璃', '花园']

/** 导出格式 —— 与主仓 `src/features/export/utils/` 一一对应 */
export const exportFormats = [
  'HTML',
  'PDF',
  'EPUB',
  'DOCX',
  'Markdown',
  'LaTeX',
  'OPML',
  'MediaWiki',
  'reStructuredText',
  '纯文本',
  '图片',
  'ZIP 整库备份',
]
