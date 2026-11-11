import { Button } from '../components/buttons/Button'
import { downloadConfig } from '../config/downloadConfig'

const fmtMB = (n: number) => `${(n / 1024 / 1024).toFixed(1)} MB`

/**
 * B10 Download（id #download，族 I）。
 * 主渠道 = GitHub Release 附件固定名直链，点击即下载（响应带
 * Content-Disposition: attachment，当前页不跳转、不开新标签）；
 * Gitee 下载指引页为国内备用（提供直链，不分卷），Release 更新日志与
 * SHA256SUMS.txt 为有意跳转。
 *
 * 蓝图 §5.7 / §11.1 / §14：只展示已核实的版本 / 大小 / 校验信息，空值不渲染；
 * 主渠道未就绪时明确显示「下载信息正在准备」，只给备用渠道，
 * 不把占位地址伪装成可用下载。
 */
export function DownloadSection() {
  const cfg = downloadConfig
  const ready =
    cfg.hasDirectDownloadLink &&
    cfg.channels.length > 0 &&
    cfg.channels.every((c) => c.downloadUrl.length > 0)

  return (
    <section className="mc-section mc-download" id="download">
      <div className="mc-container">
        <div className="mc-download__grid">
          <div>
            <h2 className="mc-h2 mc-download__title">获取安装包</h2>
            <p className="mc-download__lead">
              {ready
                ? 'Windows x64 安装包，点击即可下载。文件托管在官方 GitHub Release，可对照 SHA-256 校验完整性。'
                : '下载信息正在准备，请稍后再来，或先通过国内备用渠道获取。'}
            </p>
            <div className="mc-download__cta">
              {ready && (
                <>
                  <Button variant="primary" href={cfg.channels[0].downloadUrl}>
                    下载安装版 · v{cfg.version}
                  </Button>
                  {cfg.channels[1] && (
                    <Button
                      variant="secondary"
                      href={cfg.channels[1].downloadUrl}
                    >
                      下载免安装版
                    </Button>
                  )}
                </>
              )}
            </div>
            <p className="mc-download__meta">
              {cfg.platformLabel} {cfg.architecture} · v{cfg.version}
              {cfg.releaseDate ? ` · ${cfg.releaseDate}` : ''}
              {cfg.minWindowsVersion
                ? ` · ${cfg.minWindowsVersion} 及以上`
                : ''}
              {ready && (
                <>
                  <br />
                  主渠道：
                  <a
                    href={cfg.releasePageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Release 与更新日志 ↗
                  </a>
                  {' · '}
                  <a
                    href={cfg.checksumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SHA256SUMS.txt ↗
                  </a>
                </>
              )}
              <br />
              国内备用：
              <a
                href={cfg.fallback.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Gitee 下载指引 ↗
              </a>
            </p>
          </div>
          <div>
            <div className="mc-download__channels">
              {cfg.channels.map((c) => (
                <div className="mc-download__channel" key={c.name}>
                  <h3>{c.name}</h3>
                  <p>{c.description}</p>
                  <p className="mc-download__channel-size">
                    {fmtMB(c.sizeBytes)} · {c.sizeBytes.toLocaleString('en-US')} B
                  </p>
                  {c.sha256 && (
                    <p className="mc-download__channel-size">
                      SHA-256 {c.sha256}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <pre className="mc-download__cmd">
              {ready
                ? `# 国内备用渠道（主渠道下载慢时打开指引页）
# ${cfg.fallback.repoUrl}
# 指引页内提供 GitHub Releases 直链，无需分卷合并

# 校验主渠道下载的文件（PowerShell）
Get-FileHash .\\MarkCraft-Setup-x64.exe -Algorithm SHA256`
                : `# 国内备用渠道
# ${cfg.fallback.repoUrl}
# 指引页内提供 GitHub Releases 直链，无需分卷合并`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
