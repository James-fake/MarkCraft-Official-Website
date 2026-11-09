type Fmt = { name: string; ext: string }

const clusters: { name: string; items: Fmt[] }[] = [
  {
    name: '页面与出版物',
    items: [
      { name: 'HTML', ext: '.html' },
      { name: 'PDF', ext: '.pdf' },
      { name: 'EPUB', ext: '.epub' },
      { name: 'Word', ext: '.docx' },
    ],
  },
  {
    name: '文本与标记格式',
    items: [
      { name: 'Markdown', ext: '.md' },
      { name: 'Plain Text', ext: '.txt' },
      { name: 'LaTeX', ext: '.tex' },
      { name: 'reStructuredText', ext: '.rst' },
      { name: 'MediaWiki', ext: '.wiki' },
      { name: 'OPML', ext: '.opml' },
    ],
  },
  {
    name: '图像格式',
    items: [
      { name: 'PNG', ext: '.png' },
      { name: 'JPEG', ext: '.jpg' },
    ],
  },
]

/**
 * B7 Output（id #output，族 F）。
 * 左列三簇导出格式；右列 mono 文本块（主题示例 / 部署适配 / 整库备份）。
 */
export function OutputSection() {
  return (
    <section className="mc-section mc-output" id="output">
      <div className="mc-container">
        <div className="mc-output__grid">
          <div>
            <h2 className="mc-h2 mc-output__title">主题、格式与发布</h2>
            {clusters.map((c) => (
              <div className="mc-cluster" key={c.name}>
                <h3 className="mc-cluster__name">{c.name}</h3>
                <ul className="mc-fmt-list">
                  {c.items.map((f) => (
                    <li key={f.ext}>
                      <span>{f.name}</span>
                      <code>{f.ext}</code>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <pre className="mc-output__mono">
            <span className="note">预设主题共 63 套，以下 6 套为示例，样本非全集</span>
            {'\n'}水墨 / 学院 / 复古 / 午夜 / 终端 / 花园{'\n'}
            部署适配 GitHub / Gitee / Vercel / Cloudflare / Netlify{'\n'}
            格式型发布 微信 / Substack / MDX / Hugo / Astro{'\n'}
            整库备份 markcraft-export-YYYY-MM-DD.zip，含全部文件与图片
          </pre>
        </div>
      </div>
    </section>
  )
}
