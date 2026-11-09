type Row = { main: string; sub: string }

const rows: Row[] = [
  {
    main: '正文是你自己磁盘上的 .md 文件',
    sub: '选一个文件夹作为 Vault，正文是真实 .md 文件。应用状态（目录结构、知识库、白板、版本历史）以 JSON 存于本机应用数据目录，设置与主题存于 localStorage。',
  },
  {
    main: '哪些功能会联网',
    sub: '博客发布与部署、导入外部 URL、上传到你自己配置的图床，以及你主动开启的匿名使用统计。编辑、双向链接、双链图谱与知识库检索都在本机完成。',
  },
  {
    main: '匿名使用统计默认关闭',
    sub: '需你主动同意后才启用，同意后经 HTTPS 上报到自建的隐私友好分析服务，仅含安装 ID、应用版本、系统、语言、功能使用次数与停留时长、崩溃类名、每日心跳，不含正文、标题、文件名、路径或 IP。随时可关，关闭即停发并清空缓冲。',
  },
]

/**
 * B8 Local（id #local，族 G）。
 * 左列三行（主文 + 次文），右列真实 Vault 目录结构（mono 文本，非截图）。
 */
export function LocalSection() {
  return (
    <section className="mc-section mc-local" id="local">
      <div className="mc-container">
        <div className="mc-local__grid">
          <div>
            <h2 className="mc-h2 mc-local__title">数据归属与联网边界</h2>
            <p className="mc-local__lead">
              没有云端账号，也没有云同步。存储位置、联网范围与统计开关都可以查证。
            </p>
            <div className="mc-local__rows">
              {rows.map((r) => (
                <div className="mc-local__row" key={r.main}>
                  <p className="mc-local__row-main">{r.main}</p>
                  <p className="mc-local__row-sub">{r.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <pre className="mc-local__tree">
            {'我的知识库/\n├─ 电影笔记/\n│  ├─ 静止镜头.md\n│  └─ 长镜头与注意力.md\n├─ 阅读摘录/\n│  └─ 侯孝贤与日常时间.md\n├─ 文章/\n│  └─ 流动的时间.md\n└─ .markcraft/        本机应用数据目录（JSON）'}
          </pre>
        </div>
      </div>
    </section>
  )
}
