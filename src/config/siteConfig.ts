/**
 * 站点级配置（集中管理，避免散落在组件里）。
 */
export const siteConfig = {
  name: 'MarkCraft',
  /**
   * 导航锚点 —— 顶部导航与页脚共用这一份，改这里即两处同步。
   * 顺序与文案以 deliverables/design/04-文案定稿.md（B1 / B11）为唯一依据。
   */
  nav: [
    { id: 'craft', label: '产品' },
    { id: 'connection', label: '连接' },
    { id: 'possibility', label: '能力' },
    { id: 'output', label: '输出' },
    { id: 'local', label: '本地' },
    { id: 'faq', label: '答疑' },
  ],
  /** 源码仓库 */
  sourceRepo: 'https://gitee.com/James-fake/markcraft',
  /** 安装包独立仓库 */
  installerRepo: 'https://gitee.com/James-fake/markcraftxiazaicangdianhua',
  /** 版权起始年份 */
  copyrightYear: 2026,
} as const
