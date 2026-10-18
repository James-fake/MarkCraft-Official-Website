import { Container } from '../components/layout/Container'
import { Button } from '../components/buttons/Button'
import { downloadConfig } from '../config/downloadConfig'
import { siteConfig } from '../config/siteConfig'

/**
 * 屏幕 07 — Make It Yours / 下载与信任（蓝图 §5.7 / §11）。
 * ⚠️ 真实约束：Gitee 免费版无 >100MB 直链，安装包以分卷托管在独立仓库，
 * 用户 clone 后运行合并脚本还原。禁止展示虚构版本号或假直链。
 */
export function DownloadSection() {
  const { version, platformLabel, architecture, repoUrl, guideUrl, channels } =
    downloadConfig

  return (
    <section className="mc-section mc-download" id="download">
      <Container>
        <p className="mc-download__en">Make room for your thoughts.</p>
        <h2 className="mc-download__title">为你的想法，留出一个工作空间</h2>
        <p className="mc-download__lead">
          从下一条笔记开始，慢慢建立属于你的知识工作流。
        </p>

        <div className="mc-download__cta">
          <Button variant="primary" href={repoUrl}>
            前往下载（{platformLabel} {architecture}）
          </Button>
          <Button variant="secondary" href={guideUrl}>
            查看下载说明
          </Button>
        </div>

        <dl className="mc-download__meta">
          <div>
            <dt>版本</dt>
            <dd>{version}</dd>
          </div>
          <div>
            <dt>平台</dt>
            <dd>
              {platformLabel} · {architecture}
            </dd>
          </div>
          <div>
            <dt>发布形式</dt>
            <dd>分卷压缩（clone 后合并还原）</dd>
          </div>
        </dl>

        <div className="mc-download__channels">
          {channels.map((c) => (
            <div className="mc-download__channel" key={c.name}>
              <h3>{c.name}</h3>
              <p>{c.description}</p>
              <p className="mc-download__channel-size">
                合并后约 {(c.sizeBytes / 1024 / 1024).toFixed(1)} MB · {c.volumeCount} 个分卷
              </p>
            </div>
          ))}
        </div>

        <p className="mc-download__hint">
          安装包以分卷形式托管在独立仓库，clone 后运行仓库内合并脚本即可还原为完整
          exe；分卷方式是为适配 Gitee 免费版单文件 100MB 限制。
        </p>

        {/* 数据存储与隐私已提升为独立章节（#local），这里只留指针，避免重复叙述 */}
        <div className="mc-download__trust">
          <p>
            数据存储与隐私说明见上方的
            <a href="#local">本地优先</a>
            。完整源码见{' '}
            <a href={siteConfig.sourceRepo} target="_blank" rel="noreferrer noopener">
              源码仓库
            </a>
            ，安装包见{' '}
            <a href={siteConfig.installerRepo} target="_blank" rel="noreferrer noopener">
              安装包仓库
            </a>
            。
          </p>
        </div>
      </Container>
    </section>
  )
}
