/**
 * 下载配置（集中管理）。
 *
 * 托管策略：
 * - 主渠道：GitHub Releases。公开仓库附件可直接下载，无单文件 100 MB 限制，
 *   MarkCraft 安装包约 201 MB 可整体托管，无需切分卷。附件使用固定文件名，
 *   保证 /releases/latest/download/<name> 链接永久有效，响应带
 *   Content-Disposition: attachment，点击即下载、当前页不跳转。
 * - 备用渠道：Gitee 分卷仓库（免费版单文件 <= 100 MB），供国内网络不佳时使用。
 *
 * ⚠️ 蓝图 §5.7 / §11.1 / §14：下载信息必须真实可验证，
 *    禁止硬编码虚构地址、版本号、文件大小或校验和。
 *    改动本文件前，请对照下列来源核实，未核实项一律留空（组件不渲染）：
 *      https://api.github.com/repos/James-fake/MarkCraft/releases/latest
 *      https://github.com/James-fake/MarkCraft/releases/latest/download/SHA256SUMS.txt
 *
 * 本版本数据核实记录（2026-11-10，已双重比对）：
 *   tag_name        v1.0.0                    -> version 1.0.0
 *   published_at    2026-11-10T04:49:33Z     -> releaseDate 2026-11-10
 *   MarkCraft-Setup-x64.exe      210941711 B
 *     sha256 8080b7c1d04291fa66d09b6bd8b24477133e8d8383abae35fd17afd514046449
 *   MarkCraft-Portable-x64.exe   210660925 B
 *     sha256 e1d13c825a42b61f6d989208102907cc661a4741cf01fd402660ef08389ab357
 *   上述 SHA-256 同时与 Release asset digest 及 SHA256SUMS.txt 一致；
 *   两个 latest/download 直链均实测 200 且返回 attachment 响应头。
 */

/** Release 附件直链前缀：固定文件名使 latest/download 链接永不失效 */
const RELEASE_BASE =
  'https://github.com/James-fake/MarkCraft/releases/latest/download'

export type InstallChannel = {
  /** 渠道名称 */
  name: string
  /** 渠道说明 */
  description: string
  /** GitHub Release 附件固定名直链 */
  downloadUrl: string
  /** 附件精确字节数（来自 Release API 的 size 字段） */
  sizeBytes: number
  /** SHA-256（来自 SHA256SUMS.txt；未核实时留空，组件不展示） */
  sha256: string
}

export const downloadConfig = {
  /** 当前版本：与 Release tag 一致，去掉 v 前缀 */
  version: '1.0.0',
  /** 目标平台 */
  platformLabel: 'Windows',
  /** CPU 架构（当前仅构建 x64；ARM64 未构建） */
  architecture: 'x64',
  /** 主渠道直链是否已就绪；为 false 时组件只展示备用渠道 */
  hasDirectDownloadLink: true,
  /** Release 页面（更新日志与全部附件） */
  releasePageUrl: 'https://github.com/James-fake/MarkCraft/releases/latest',
  /** 校验文件 */
  checksumUrl: `${RELEASE_BASE}/SHA256SUMS.txt`,
  /** 国内备用渠道：Gitee 分卷仓库 */
  fallback: {
    name: '国内备用（Gitee 分卷）',
    repoUrl: 'https://gitee.com/James-fake/markcraftxiazaicangdianhua',
    guideUrl:
      'https://gitee.com/James-fake/markcraftxiazaicangdianhua#下载与合并',
    description: '分卷托管，clone 后按仓库内说明合并还原为完整 exe',
  },
  /** 安装渠道 */
  channels: [
    {
      name: '安装版',
      description: 'NSIS 安装程序，可自选安装目录与笔记存储位置',
      downloadUrl: `${RELEASE_BASE}/MarkCraft-Setup-x64.exe`,
      sizeBytes: 210941711,
      sha256:
        '8080b7c1d04291fa66d09b6bd8b24477133e8d8383abae35fd17afd514046449',
    },
    {
      name: '免安装版',
      description: '绿色版，双击即用，不写注册表',
      downloadUrl: `${RELEASE_BASE}/MarkCraft-Portable-x64.exe`,
      sizeBytes: 210660925,
      sha256:
        'e1d13c825a42b61f6d989208102907cc661a4741cf01fd402660ef08389ab357',
    },
  ] as InstallChannel[],
  /** 发布日期（Release published_at 的 UTC 日期） */
  releaseDate: '2026-11-10',
  /** 最低 Windows 版本：尚未核实，留空不展示（蓝图 §14） */
  minWindowsVersion: '',
  /** 数字签名信息：尚未核实，留空不展示（蓝图 §14） */
  signature: '',
} as const
