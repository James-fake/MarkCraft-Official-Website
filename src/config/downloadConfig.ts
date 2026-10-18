/**
 * 下载配置（集中管理）。
 *
 * ⚠️ 真实约束（务必保留）：
 * Gitee 免费版对单个文件限制 100MB（含 Releases 附件），而 MarkCraft 安装包
 * 单个 exe 约 201MB，无法整体托管。因此安装包以「分卷（volume）」形式存放在
 * 独立安装包仓库，用户 clone 后运行仓库内合并脚本还原为完整 exe。
 *
 * 蓝图 §5.7 / §11.1 要求：下载信息必须真实可验证，禁止硬编码虚构地址或版本号。
 * 下面数值来自 release/ 实际产物（已字节级校验），如发新版请同步更新。
 */
export type InstallChannel = {
  /** 渠道名称 */
  name: string
  /** 渠道说明 */
  description: string
  /** 分卷文件前缀（不含 .z00 后缀等） */
  volumePrefix: string
  /** 分卷数量 */
  volumeCount: number
  /** 合并后 exe 的精确字节数（用于校验） */
  sizeBytes: number
}

export const downloadConfig = {
  /** 当前版本 */
  version: 'v0.1.0',
  /** 目标平台 */
  platformLabel: 'Windows',
  /** CPU 架构（当前仅构建 x64；ARM64 未构建） */
  architecture: 'x64',
  /** 安装包仓库地址（git clone 入口） */
  repoUrl: 'https://gitee.com/James-fake/markcraftxiazaicangdianhua',
  /** 安装包仓库的下载说明（README 锚点） */
  guideUrl:
    'https://gitee.com/James-fake/markcraftxiazaicangdianhua#下载与合并',
  /** 是否已配置可直接下载的直链；Gitee 免费版无直链，走 clone + 合并 */
  hasDirectDownloadLink: false,
  /** 安装渠道 */
  channels: [
    {
      name: '安装版',
      description: 'MarkCraft-Setup-*.exe（NSIS 安装程序）',
      volumePrefix: 'MarkCraft-Setup-0.1.0-x64.exe.z',
      volumeCount: 3,
      sizeBytes: 210492652,
    },
    {
      name: '免安装版',
      description: 'MarkCraft-Portable-*.exe（绿色版，解压即用）',
      volumePrefix: 'MarkCraft-Portable-0.1.0-x64.exe.z',
      volumeCount: 3,
      sizeBytes: 210268563,
    },
  ] as InstallChannel[],
  /**
   * 待核实项（蓝图 §14）：填写前不要展示。
   * - 发布日期
   * - 最低 Windows 版本
   * - 数字签名 / 校验和
   */
  releaseDate: '', // 待核实
  minWindowsVersion: '', // 待核实
  checksum: '', // 待核实
} as const
