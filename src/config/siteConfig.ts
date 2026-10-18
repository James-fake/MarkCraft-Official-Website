/**
 * 站点级配置（集中管理，避免散落在组件里）。
 * 说明见蓝图《MarkCraft 官网设计蓝图 v1.0》§10.3 配置集中化。
 */
export const siteConfig = {
  name: 'MarkCraft',
  tagline: 'A Studio for Thought.',
  taglineZh: '让想法有地方生长。',
  /**
   * 导航锚点。
   * ⚠️ 顶部导航与页脚**共用这一份**（此前两处词汇不一致：导航「产品/连接/能力」
   *    而页脚「编辑/连接/可能/演示」），改这里即两处同步。
   */
  nav: [
    { id: 'craft', label: 'Product', labelZh: '产品' },
    { id: 'connection', label: 'Experience', labelZh: '连接' },
    { id: 'output', label: 'Output', labelZh: '输出' },
    { id: 'local', label: 'Local-first', labelZh: '本地' },
    { id: 'faq', label: 'FAQ', labelZh: '答疑' },
  ],
  /** 首屏 CTA 目标（工作流已在首屏背景持续呈现 → 指向第一个真实界面章节） */
  demoPath: '#craft',
  /** 源码仓库 */
  sourceRepo: 'https://gitee.com/James-fake/markcraft',
  /** 安装包独立仓库 */
  installerRepo: 'https://gitee.com/James-fake/markcraftxiazaicangdianhua',
  /** 版权起始年份 */
  copyrightYear: 2026,
} as const
