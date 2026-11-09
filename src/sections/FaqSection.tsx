const QA: { q: string; a: string }[] = [
  {
    q: '内容存在哪里？',
    a: '选一个文件夹作为 Vault，正文以真实 .md 文件存在那里，任何编辑器都能打开。目录结构、知识库与版本历史以 JSON 存于本机应用数据目录，设置存 localStorage。',
  },
  {
    q: '需要联网吗？',
    a: '不用。编辑、双向链接、双链图谱与检索都在本机完成。会联网的只有博客发布、导入外部 URL、图床上传与你主动开启的匿名使用统计。',
  },
  {
    q: '数据会被上传到你们的服务器吗？',
    a: '正文不会离开你的设备，没有云端账号也没有云同步。匿名使用统计默认关闭，需你主动同意后才经 HTTPS 上报，随时可关。上报内容不含正文、标题、文件名、路径或 IP。',
  },
  {
    q: '能用网盘同步吗？',
    a: '可以。Vault 就是一个普通文件夹，用网盘、同步盘或 Git 同步它即可。应用自身状态存于本机应用数据目录，不在这个文件夹里。',
  },
  {
    q: '可以导出成什么格式？',
    a: 'HTML、PDF、EPUB、Word、Markdown、LaTeX、reStructuredText、MediaWiki、OPML、Plain Text、PNG、JPEG，共 12 种。另有含全部文件与图片的 ZIP 整库备份。',
  },
  {
    q: '支持哪些系统？',
    a: '当前提供 Windows x64 的安装版与免安装版。其它平台尚未正式发布，发布前不会在官网宣传为已支持。',
  },
]

/**
 * B9 FAQ（id #faq，族 H）。
 * 原生 <details> 折叠：无 JS、键盘可达、读屏友好；发丝分隔线 + 加减号指示。
 * 答案为可核实事实（存储、离线能力、导出格式、平台）。
 */
export function FaqSection() {
  return (
    <section className="mc-section mc-faq" id="faq">
      <div className="mc-container">
        <h2 className="mc-h2 mc-faq__title">常见问题</h2>
        <div className="mc-faq__list">
          {QA.map((item) => (
            <details className="mc-faq__item" key={item.q}>
              <summary className="mc-faq__q">{item.q}</summary>
              <p className="mc-faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
