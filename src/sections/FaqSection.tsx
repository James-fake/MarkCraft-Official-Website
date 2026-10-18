import { Container } from '../components/layout/Container'
import { SectionTitle } from '../components/ui/SectionTitle'

/**
 * 屏幕 08 — FAQ
 *
 * 用原生 `<details>` 做折叠：无需 JS、键盘可达、读屏友好。
 * 视觉上按编辑设计惯例「去掉卡片盒子」，只用发丝分隔线 + 加减号。
 *
 * ⚠️ 答案必须是**可核实的事实**（存储位置、离线能力、导出格式、平台）。
 *    涉及未定项（价格、发布日期）一律不写。
 */
const QA = [
  {
    q: '我的笔记存在哪里？',
    a: '存在你指定的知识库文件夹里，每篇笔记就是一个 .md 文件。应用自身的设置与索引另存于系统的应用数据目录，不影响你的文件。',
  },
  {
    q: '需要联网吗？',
    a: '不需要。写作、编辑、双向链接、知识图谱与知识库检索都完全离线运行 —— 当前版本没有任何需要联网的功能。',
  },
  {
    q: '数据会被上传到你们的服务器吗？',
    a: '不会。MarkCraft 没有云端账号体系，也不发起任何联网请求 —— 笔记始终留在你自己的磁盘上。',
  },
  {
    q: '能用网盘同步吗？',
    a: '可以。知识库就是一个普通文件夹，用任何同步工具同步它即可 —— 网盘客户端、同步盘或 Git 都行，MarkCraft 不需要知道。',
  },
  {
    q: '可以导出成什么格式？',
    a: 'HTML、PDF、EPUB、DOCX、Markdown、LaTeX、OPML、MediaWiki、reStructuredText、纯文本、图片，以及包含全部文件与图片的 ZIP 整库备份。',
  },
  {
    q: '支持哪些系统？',
    a: '当前提供 Windows x64 的安装版与免安装版。其它平台尚未发布，发布前不会在官网上宣传为已支持。',
  },
]

export function FaqSection() {
  return (
    <section className="mc-section mc-faq" id="faq">
      <Container>
        <SectionTitle
          titleEn="Before you download."
          title="你可能想先确认的事"
          lead="关于数据在哪、要不要联网、能不能带走 —— 先把这些说清楚。"
        />

        <div className="mc-faq__list">
          {QA.map((item) => (
            <details className="mc-faq__item" key={item.q}>
              <summary className="mc-faq__q">
                <span>{item.q}</span>
                <span className="mc-faq__icon" aria-hidden="true" />
              </summary>
              <p className="mc-faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
