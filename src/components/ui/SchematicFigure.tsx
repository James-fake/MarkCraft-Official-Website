import type { ReactNode } from 'react'

type Variant = 'editor' | 'graph' | 'palette'

const ASPECT: Record<Variant, string> = {
  editor: '4/3',
  graph: '16/9',
  palette: '16/10',
}

const SVG_PROPS = {
  width: '100%',
  height: '100%',
  preserveAspectRatio: 'xMidYMid meet',
  role: 'presentation' as const,
}

const FONT = "Inter, 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif"
const MONO = "ui-monospace, 'SFMono-Regular', Menlo, monospace"

/** 编辑器主视图示意：浮起窗口 + 侧栏文件树（带图标）+ 真实可读正文 + 链接辉光 */
function EditorSchematic() {
  return (
    <svg viewBox="0 0 640 480" {...SVG_PROPS}>
      <defs>
        <linearGradient id="ed-win" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1E2333" />
          <stop offset="1" stopColor="#14171F" />
        </linearGradient>
        <linearGradient id="ed-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#262C3D" />
          <stop offset="1" stopColor="#181C28" />
        </linearGradient>
        <filter id="ed-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#000000" floodOpacity="0.55" />
        </filter>
        <filter id="ed-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>

      <ellipse cx="500" cy="120" rx="180" ry="140" fill="#7C8CFF" opacity="0.14" filter="url(#ed-glow)" />

      <rect x="34" y="28" width="572" height="424" rx="16" fill="url(#ed-win)" stroke="#2C3242" filter="url(#ed-soft)" />
      <path d="M34 44 a16 16 0 0 1 16 -16 h540 a16 16 0 0 1 16 16 v28 h-572 z" fill="url(#ed-bar)" />
      <circle cx="60" cy="46" r="5" fill="#3A4055" />
      <circle cx="78" cy="46" r="5" fill="#3A4055" />
      <circle cx="96" cy="46" r="5" fill="#3A4055" />
      <rect x="246" y="34" width="148" height="24" rx="7" fill="#0B0D13" stroke="#2A2F3D" />
      <rect x="258" y="42" width="8" height="10" rx="1.5" fill="#7C8CFF" />
      <text x="274" y="50" fontFamily={FONT} fontSize="11" fill="#9AA3B5">笔记.md</text>
      <line x1="34" y1="72" x2="606" y2="72" stroke="#262B3B" />

      <rect x="34" y="72" width="168" height="380" fill="#0C0E15" />
      <line x1="202" y1="72" x2="202" y2="452" stroke="#262B3B" />
      <path d="M48 88 h9 l4 5 h18 v9 h-31 z" fill="#5A6275" />
      <text x="92" y="100" fontFamily={FONT} fontSize="10" letterSpacing="1.5" fill="#6B7280">VAULT</text>

      <rect x="44" y="112" width="146" height="30" rx="8" fill="#7C8CFF" opacity="0.16" />
      <rect x="44" y="112" width="3" height="30" rx="1.5" fill="#7C8CFF" />
      <rect x="56" y="119" width="11" height="14" rx="2" fill="#7C8CFF" />
      <text x="76" y="131" fontFamily={FONT} fontSize="12" fill="#DCE2F0">双链图谱.md</text>
      <rect x="44" y="150" width="146" height="28" rx="8" fill="#151821" />
      <rect x="56" y="156" width="11" height="14" rx="2" fill="#3A4055" />
      <text x="76" y="168" fontFamily={FONT} fontSize="12" fill="#9AA3B5">阅读摘录.md</text>
      <rect x="44" y="184" width="146" height="28" rx="8" fill="#151821" />
      <rect x="56" y="190" width="11" height="14" rx="2" fill="#3A4055" />
      <text x="76" y="202" fontFamily={FONT} fontSize="12" fill="#9AA3B5">白板-想法.md</text>
      <rect x="44" y="218" width="146" height="28" rx="8" fill="#151821" />
      <rect x="56" y="224" width="11" height="14" rx="2" fill="#3A4055" />
      <text x="76" y="236" fontFamily={FONT} fontSize="12" fill="#9AA3B5">博客草稿.md</text>

      <rect x="234" y="96" width="4" height="26" rx="2" fill="#7C8CFF" />
      <text x="250" y="117" fontFamily={FONT} fontSize="20" fontWeight="600" fill="#E8ECF4">看见内容之间的关系</text>
      <text x="234" y="140" fontFamily={FONT} fontSize="11" fill="#6B7280">Markdown · 刚刚编辑</text>
      <text x="234" y="168" fontFamily={FONT} fontSize="13.5" fill="#8A93A6">双向链接让笔记彼此呼应，相关条目</text>
      <text x="234" y="188" fontFamily={FONT} fontSize="13.5" fill="#8A93A6">自然连成一张可探索的网络。</text>

      <rect x="234" y="206" width="352" height="50" rx="10" fill="#7C8CFF" opacity="0.08" />
      <rect x="234" y="206" width="3" height="50" rx="1.5" fill="#7C8CFF" />
      <text x="250" y="228" fontFamily={FONT} fontSize="12.5" fill="#A5B4FF">反向链接会显示谁在引用当前笔记。</text>
      <text x="250" y="247" fontFamily={FONT} fontSize="12.5" fill="#8A93A6">编辑、图谱与检索都在本机完成。</text>

      <rect x="234" y="274" width="118" height="28" rx="14" fill="#7C8CFF" opacity="0.2" />
      <ellipse cx="293" cy="288" rx="70" ry="22" fill="#7C8CFF" opacity="0.18" filter="url(#ed-glow)" />
      <text x="250" y="292" fontFamily={MONO} fontSize="12.5" fill="#A5B4FF">[[连接]]</text>
      <path d="M293 288 C 250 288, 226 256, 224 236" stroke="#7C8CFF" strokeWidth="1.5" fill="none" opacity="0.55" strokeDasharray="4 4" />

      <circle cx="240" cy="336" r="3.5" fill="#7C8CFF" />
      <text x="254" y="341" fontFamily={FONT} fontSize="13.5" fill="#8A93A6">白板把想法画成关系图</text>
      <circle cx="240" cy="360" r="3.5" fill="#7C8CFF" />
      <text x="254" y="365" fontFamily={FONT} fontSize="13.5" fill="#8A93A6">博客工坊一键发布</text>

      <rect x="234" y="378" width="352" height="58" rx="10" fill="#0A0B0F" stroke="#262B3B" />
      <text x="246" y="397" fontFamily={MONO} fontSize="10" fill="#6B7280">code</text>
      <text x="246" y="414" fontFamily={MONO} fontSize="11.5" fill="#9AA3B5">[[连接]] 双向链接</text>
      <text x="246" y="428" fontFamily={MONO} fontSize="11.5" fill="#9AA3B5"># 标题 · 列表 · 代码块</text>
    </svg>
  )
}

/** 双链图谱示意：辉光底色 + 贝塞尔连线（带模糊辉光）+ 中心高亮节点 + 图例 */
function GraphSchematic() {
  return (
    <svg viewBox="0 0 640 360" {...SVG_PROPS}>
      <defs>
        <radialGradient id="gr-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#7C8CFF" stopOpacity="0.45" />
          <stop offset="1" stopColor="#7C8CFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gr-edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7C8CFF" />
          <stop offset="1" stopColor="#3A4055" />
        </linearGradient>
        <filter id="gr-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.45" />
        </filter>
        <filter id="gr-blur" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <circle cx="320" cy="180" r="150" fill="none" stroke="#262B3B" strokeOpacity="0.4" />
      <circle cx="320" cy="180" r="105" fill="none" stroke="#262B3B" strokeOpacity="0.3" />

      <circle cx="300" cy="175" r="120" fill="url(#gr-glow)" />

      <g fill="none" stroke="#3A4055" strokeWidth="1.5" opacity="0.6">
        <path d="M150 110 C 220 130, 250 150, 300 175" />
        <path d="M300 175 C 250 230, 230 250, 200 285" />
        <path d="M300 175 C 380 150, 420 130, 470 110" />
        <path d="M470 110 C 520 160, 520 210, 500 250" />
        <path d="M200 285 C 270 305, 310 312, 360 300" />
        <path d="M360 300 C 420 295, 470 280, 500 250" />
        <path d="M150 110 C 180 190, 190 240, 200 285" />
        <path d="M470 110 C 520 200, 540 250, 560 290" />
      </g>
      <path d="M300 175 C 380 150, 420 130, 470 110" stroke="#7C8CFF" strokeWidth="5" fill="none" opacity="0.3" filter="url(#gr-blur)" />
      <path d="M300 175 C 380 150, 420 130, 470 110" stroke="url(#gr-edge)" strokeWidth="2.5" fill="none" opacity="0.9" />

      <g filter="url(#gr-soft)">
        <circle cx="150" cy="110" r="15" fill="#171B26" stroke="#3A4055" strokeWidth="1.5" />
        <circle cx="200" cy="285" r="14" fill="#171B26" stroke="#3A4055" strokeWidth="1.5" />
        <circle cx="470" cy="110" r="17" fill="#171B26" stroke="#7C8CFF" strokeWidth="1.5" />
        <circle cx="500" cy="250" r="15" fill="#171B26" stroke="#3A4055" strokeWidth="1.5" />
        <circle cx="360" cy="300" r="13" fill="#171B26" stroke="#3A4055" strokeWidth="1.5" />
        <circle cx="560" cy="290" r="14" fill="#171B26" stroke="#3A4055" strokeWidth="1.5" />
      </g>
      <circle cx="300" cy="175" r="22" fill="#1A1E2B" stroke="#7C8CFF" strokeWidth="2.5" />
      <circle cx="300" cy="175" r="7" fill="#7C8CFF" />
      <text x="300" y="222" textAnchor="middle" fontFamily={FONT} fontSize="12" fill="#C8CFDD">当前笔记</text>

      <rect x="322" y="158" width="44" height="18" rx="9" fill="#0D0F15" stroke="#2A2F3D" />
      <text x="344" y="171" textAnchor="middle" fontFamily={MONO} fontSize="10" fill="#9AA3B5">6 连接</text>

      <text x="150" y="84" textAnchor="middle" fontFamily={FONT} fontSize="10" fill="#6B7280">电影笔记</text>
      <text x="470" y="84" textAnchor="middle" fontFamily={FONT} fontSize="10" fill="#A5B4FF">阅读摘录</text>
      <text x="560" y="314" textAnchor="middle" fontFamily={FONT} fontSize="10" fill="#6B7280">白板</text>

      <circle cx="40" cy="330" r="5" fill="#7C8CFF" />
      <text x="52" y="334" fontFamily={FONT} fontSize="10" fill="#8A93A6">当前</text>
      <circle cx="108" cy="330" r="5" fill="#3A4055" />
      <text x="120" y="334" fontFamily={FONT} fontSize="10" fill="#8A93A6">关联</text>
    </svg>
  )
}

/** 命令面板示意：暗化应用骨架（模糊感）+ 玻璃质感浮起面板 + 图标命令列表 + 键盘提示 */
function PaletteSchematic() {
  return (
    <svg viewBox="0 0 640 400" {...SVG_PROPS}>
      <defs>
        <filter id="pa-shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="16" stdDeviation="22" floodColor="#000000" floodOpacity="0.6" />
        </filter>
        <filter id="pa-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <linearGradient id="pa-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="640" height="400" fill="#0B0D14" />
      <rect x="0" y="0" width="150" height="400" fill="#090B11" />
      <g opacity="0.4">
        <rect x="24" y="40" width="100" height="10" rx="5" fill="#151821" />
        <rect x="24" y="70" width="80" height="8" rx="4" fill="#151821" />
        <rect x="24" y="88" width="92" height="8" rx="4" fill="#151821" />
        <rect x="186" y="58" width="220" height="14" rx="7" fill="#151821" />
        <rect x="186" y="86" width="170" height="10" rx="5" fill="#151821" />
        <rect x="186" y="106" width="200" height="10" rx="5" fill="#151821" />
        <rect x="186" y="126" width="150" height="10" rx="5" fill="#151821" />
      </g>

      <rect x="176" y="70" width="280" height="256" rx="16" fill="#7C8CFF" opacity="0.08" filter="url(#pa-blur)" />
      <rect x="176" y="70" width="280" height="254" rx="16" fill="#151821" stroke="#2C3242" filter="url(#pa-shadow)" />
      <rect x="176" y="70" width="280" height="118" rx="16" fill="url(#pa-sheen)" />

      <rect x="192" y="86" width="248" height="40" rx="10" fill="#0B0D13" stroke="#262B3B" />
      <circle cx="212" cy="106" r="6.5" fill="none" stroke="#6B7280" strokeWidth="1.6" />
      <line x1="217" y1="111" x2="223" y2="117" stroke="#6B7280" strokeWidth="1.6" />
      <text x="230" y="110" fontFamily={FONT} fontSize="12.5" fill="#6B7280">搜索命令或跳转…</text>
      <rect x="402" y="96" width="30" height="20" rx="5" fill="#7C8CFF" opacity="0.2" />
      <text x="417" y="110" textAnchor="middle" fontFamily={MONO} fontSize="11" fill="#A5B4FF">⌘K</text>

      <text x="192" y="148" fontFamily={FONT} fontSize="10" letterSpacing="1" fill="#6B7280">命令</text>
      <line x1="192" y1="156" x2="440" y2="156" stroke="#262B3B" />

      <rect x="192" y="164" width="248" height="34" rx="9" fill="#7C8CFF" opacity="0.14" />
      <rect x="192" y="164" width="3" height="34" rx="1.5" fill="#7C8CFF" />
      <rect x="204" y="172" width="20" height="20" rx="6" fill="#1A1E2B" stroke="#7C8CFF" />
      <path d="M212 176 l4 4 4 -6" fill="none" stroke="#A5B4FF" strokeWidth="1.6" />
      <text x="234" y="186" fontFamily={FONT} fontSize="13" fill="#E8ECF4">跳转到 双链图谱</text>
      <text x="424" y="186" textAnchor="end" fontFamily={MONO} fontSize="10" fill="#6B7280">↵</text>

      <rect x="192" y="204" width="248" height="34" rx="9" fill="#151821" />
      <rect x="204" y="212" width="20" height="20" rx="6" fill="#0B0D13" stroke="#3A4055" />
      <circle cx="211" cy="219" r="2.4" fill="#8A93A6" />
      <circle cx="217" cy="225" r="2.4" fill="#8A93A6" />
      <path d="M211 222 h6" stroke="#8A93A6" strokeWidth="1" />
      <text x="234" y="226" fontFamily={FONT} fontSize="13" fill="#C8CFDD">插入 双向链接</text>
      <text x="424" y="226" textAnchor="end" fontFamily={FONT} fontSize="10" fill="#6B7280">编辑</text>

      <rect x="192" y="244" width="248" height="34" rx="9" fill="#151821" />
      <rect x="204" y="252" width="20" height="20" rx="6" fill="#0B0D13" stroke="#3A4055" />
      <rect x="210" y="258" width="8" height="8" rx="1.5" fill="#8A93A6" />
      <text x="234" y="266" fontFamily={FONT} fontSize="13" fill="#C8CFDD">切换 源码 / 预览</text>
      <text x="424" y="266" textAnchor="end" fontFamily={FONT} fontSize="10" fill="#6B7280">视图</text>

      <rect x="192" y="284" width="248" height="34" rx="9" fill="#151821" />
      <rect x="204" y="292" width="20" height="20" rx="6" fill="#0B0D13" stroke="#3A4055" />
      <rect x="210" y="298" width="8" height="2" rx="1" fill="#8A93A6" />
      <rect x="210" y="302" width="8" height="2" rx="1" fill="#8A93A6" />
      <rect x="210" y="306" width="5" height="2" rx="1" fill="#8A93A6" />
      <text x="234" y="306" fontFamily={FONT} fontSize="13" fill="#C8CFDD">打开 命令面板</text>
      <text x="424" y="306" textAnchor="end" fontFamily={MONO} fontSize="10" fill="#6B7280">⌘K</text>

      <text x="200" y="324" fontFamily={MONO} fontSize="9" fill="#6B7280">↑↓ 选择   ↵ 打开   esc 关闭</text>
    </svg>
  )
}

const SCHEMATICS: Record<Variant, () => ReactNode> = {
  editor: EditorSchematic,
  graph: GraphSchematic,
  palette: PaletteSchematic,
}

type Props = {
  variant: Variant
  /** 占位框的无障碍标签（role=img），应说明这是示意、非真实截图 */
  ariaLabel: string
  /** 图下说明（figcaption），可选 */
  figcaption?: string
  className?: string
}

/**
 * 抽象示意插画框 —— 替代纯色空占位框。
 * 用设计系统令牌画出功能示意轮廓（编辑器 / 双链图谱 / 命令面板），
 * 明确是示意图、非真实截图，但盒子内已有内容、不再空白。
 */
export function SchematicFigure({ variant, ariaLabel, figcaption, className }: Props) {
  const Svg = SCHEMATICS[variant]
  return (
    <figure className={`mc-figure${className ? ` ${className}` : ''}`}>
      <div
        className="mc-figure__frame mc-figure__frame--schematic"
        role="img"
        aria-label={ariaLabel}
        style={{ aspectRatio: ASPECT[variant] }}
      >
        <Svg />
      </div>
      {figcaption && <figcaption>{figcaption}</figcaption>}
    </figure>
  )
}
