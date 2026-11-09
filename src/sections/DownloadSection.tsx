import { Button } from '../components/buttons/Button'
import { downloadConfig } from '../config/downloadConfig'

const channels = [
  {
    name: '安装版',
    meta: 'NSIS 安装程序，3 个分卷',
    bytes: downloadConfig.channels[0].sizeBytes,
  },
  {
    name: '免安装版',
    meta: '解压即用，3 个分卷',
    bytes: downloadConfig.channels[1].sizeBytes,
  },
]

const fmt = (n: number) => n.toLocaleString('en-US')

/**
 * B10 Download（id #download，族 I）。
 * 全站唯一真实转化动作：外部链接到安装包仓库。不展示具体版本号、不提供文件直链。
 */
export function DownloadSection() {
  return (
    <section className="mc-section mc-download" id="download">
      <div className="mc-container">
        <div className="mc-download__grid">
          <div>
            <h2 className="mc-h2 mc-download__title">获取安装包</h2>
            <p className="mc-download__lead">
              安装包以分卷形式托管，clone 后运行仓库内合并脚本还原为完整 exe。
            </p>
            <div className="mc-download__cta">
              <Button variant="primary" href={downloadConfig.repoUrl} external>
                前往安装包仓库
              </Button>
            </div>
            <p className="mc-download__meta">
              Windows x64 · {downloadConfig.version}，无文件直链
            </p>
          </div>
          <div>
            <div className="mc-download__channels">
              {channels.map((c) => (
                <div className="mc-download__channel" key={c.name}>
                  <h3>{c.name}</h3>
                  <p>{c.meta}</p>
                  <p className="mc-download__channel-size">{fmt(c.bytes)} B</p>
                </div>
              ))}
            </div>
            <pre className="mc-download__cmd">
              {`git clone ${downloadConfig.repoUrl}\n运行仓库内合并脚本，还原为完整 exe\n对照仓库给出的合并后字节数校验，再运行`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
