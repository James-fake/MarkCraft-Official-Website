import {
  MANUSCRIPT_LINES,
  MANUSCRIPT_OUTLINE,
  type Focus,
  type ManuscriptLine,
} from './manuscriptData'

type Props = {
  /** 焦点（用于高亮当前正在写的行 / 页边索引） */
  focus?: Focus
  /** source = 显示 Markdown 语法；rendered = 渲染后的富文本 */
  mode?: 'source' | 'rendered'
  /** 是否显示页边索引 */
  outline?: boolean
  className?: string
}

const MARKER: Record<ManuscriptLine['kind'], string> = {
  h1: '#',
  quote: '>',
  li: '-',
  p: '',
  code: '`',
}

/**
 * 一页**被排版的手稿**。
 *
 * 不用任何图片：直接把 Markdown 的语法与渲染结果排出来。
 * 同一份内容在 `source` / `rendered` 两种模式下呈现 —— 这正是 MarkCraft 的双引擎。
 */
export function ManuscriptPage({ focus, mode = 'source', outline = false, className = '' }: Props) {
  return (
    <article className={`mc-page mc-page--${mode} ${className}`.trim()}>
      {outline && (
        <aside className="mc-page__margin">
          <span className="mc-page__margin-label">目录</span>
          <ol className="mc-page__outline">
            {MANUSCRIPT_OUTLINE.map((line, i) => (
              <li key={line} className={focus && i === focus.outlineIndex ? 'is-focus' : ''}>
                {line}
              </li>
            ))}
          </ol>
        </aside>
      )}
      <div className="mc-page__body">
        {MANUSCRIPT_LINES.map((line, i) => (
          <Line key={i} line={line} focus={focus} />
        ))}
      </div>
    </article>
  )
}

function Line({ line, focus }: { line: ManuscriptLine; focus?: Focus }) {
  const linked = 'link' in line && line.link ? line.link : undefined
  const isFocus = !!linked && !!focus && linked.id === focus.id
  const marker = MARKER[line.kind]

  return (
    <div className={`mc-md mc-md--${line.kind}${isFocus ? ' is-focus' : ''}`}>
      <span className="mc-md__marker" aria-hidden="true">
        {marker}
      </span>
      <span className="mc-md__text">
        {/* 焦点行：换 key 让 CSS 擦拭动画重新开始 —— 读起来就是「这一行正在被写出来」 */}
        <span
          key={isFocus ? `typed-${focus?.id}` : 'idle'}
          className={`mc-md__run${isFocus ? ' is-typed' : ''}`}
        >
          {line.text}
        </span>
        {linked && (
          <>
            <span className="mc-md__bracket" aria-hidden="true">
              [[
            </span>
            <span className="mc-md__link">{linked.label}</span>
            <span className="mc-md__bracket" aria-hidden="true">
              ]]
            </span>
          </>
        )}
        {isFocus && <span className="mc-md__caret" aria-hidden="true" />}
      </span>
    </div>
  )
}
