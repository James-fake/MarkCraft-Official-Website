import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function base(props: IconProps) {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  }
}

/** 品牌标记：与产品本体同源的「折角便签」squircle
 *  （#7C8CFF 渐变舞台 + 白纸折角 + path 压印 M）。用于导航与页脚，达成品牌统一。 */
export function IconMark(props: IconProps) {
  return (
    <svg viewBox="0 0 512 512" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="imBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9AA7FF" />
          <stop offset="0.5" stopColor="#7C8CFF" />
          <stop offset="1" stopColor="#5E6BD6" />
        </linearGradient>
        <linearGradient id="imSheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="imPaper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#EEF1FB" />
        </linearGradient>
        <filter id="imShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#1a1f4a" floodOpacity="0.35" />
        </filter>
      </defs>
      <rect x="8" y="8" width="496" height="496" rx="124" fill="url(#imBg)" />
      <rect x="8" y="8" width="496" height="496" rx="124" fill="url(#imSheen)" />
      <g transform="rotate(-5 256 256)" filter="url(#imShadow)">
        <path d="M96 96 L372 96 L416 140 L416 416 L96 416 Z" fill="url(#imPaper)" />
        <path d="M372 96 L416 140 L416 96 Z" fill="#E2E6F5" />
        <path d="M372 96 L416 140" fill="none" stroke="#C7CCE8" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M176 336 L176 192 L216 192 L256 264 L296 192 L336 192 L336 336 L304 336 L304 248 L256 326 L208 248 L208 336 Z"
          fill="#7C8CFF"
        />
        <g stroke="#7C8CFF" strokeWidth="9" strokeLinecap="round" opacity="0.2">
          <line x1="150" y1="362" x2="362" y2="362" />
          <line x1="150" y1="388" x2="362" y2="388" />
          <line x1="150" y1="412" x2="318" y2="412" />
        </g>
      </g>
      <rect x="8" y="8" width="496" height="496" rx="124" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="3" />
    </svg>
  )
}

export function IconImport(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  )
}

export function IconLink(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
    </svg>
  )
}

export function IconPublish(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
      <path d="M5 21h14" />
    </svg>
  )
}

export function IconSource(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
    </svg>
  )
}

export function IconWysiwyg(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9h10M7 13h6" />
    </svg>
  )
}

export function IconSync(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12a8 8 0 0 1 13.5-5.5L20 8" />
      <path d="M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.5 5.5L4 16" />
      <path d="M4 20v-4h4" />
    </svg>
  )
}

export function IconCommand(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3M13 15h4" />
    </svg>
  )
}

export function IconBoard(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18M9 4v16M15 4v16" />
    </svg>
  )
}

export function IconLibrary(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h4v16H5zM11 4h4v16h-4z" />
      <path d="M17 5l3 1-2.5 14-3-1z" />
    </svg>
  )
}
