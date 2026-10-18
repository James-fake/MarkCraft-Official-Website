import { Container } from '../components/layout/Container'
import { SectionTitle } from '../components/ui/SectionTitle'

/**
 * 屏幕 07 — The Ground / 本地优先
 *
 * 对本地优先的桌面应用来说，「数据主权」是最有力的差异点，
 * 所以从下载区的小字提升为独立章节。视觉仍走「排版」而非截图：
 * 用真实的知识库目录结构说话。
 */
const POINTS = [
  {
    t: '纯文本 .md',
    d: '每篇笔记都是一个 Markdown 文件，任何编辑器都能打开，不绑定 MarkCraft。',
  },
  {
    t: '文件在你自己的磁盘上',
    d: '选一个文件夹作为知识库，笔记就以真实文件存在那里 —— 不是数据库里的一行。',
  },
  {
    t: '没有账号，没有云端',
    d: '不经过我们的服务器，也不发起任何联网请求。检索完全在本地完成。',
  },
  {
    t: '随时整库带走',
    d: '一次导出全部 .md、图片与元数据（ZIP），换台电脑解开就能继续写。',
  },
]

const TREE = [
  { folder: '电影笔记', files: ['电影中的静止镜头.md', '空间如何塑造人物.md', '长镜头与观众注意力.md'] },
  { folder: '阅读摘录', files: ['侯孝贤与日常时间.md'] },
  { folder: '文章', files: ['静止的画面，流动的时间.md'] },
]

export function LocalSection() {
  return (
    <section className="mc-section mc-local" id="local">
      <Container>
        <div className="mc-local__grid">
          <div className="mc-local__copy">
            <SectionTitle
              titleEn="Your files stay yours."
              title="你的笔记，就是你的文件"
              lead="MarkCraft 把内容交还给文件系统：没有私有格式，没有必须登录的账号，也没有只能待在某个服务里的数据。"
              size="large"
            />
            <ul className="mc-local__list">
              {POINTS.map((p) => (
                <li key={p.t}>
                  <strong>{p.t}</strong>
                  <span>{p.d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mc-local__tree">
            <div className="mc-local__tree-head">
              <span className="mc-local__badge">本地</span>
              <span className="mc-local__path">~/Documents/我的知识库</span>
            </div>
            <ul className="mc-local__folders">
              {TREE.map((g) => (
                <li key={g.folder}>
                  <span className="mc-local__folder">{g.folder}</span>
                  <ul>
                    {g.files.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
