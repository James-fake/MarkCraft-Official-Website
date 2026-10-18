import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import './styles/tokens.css'
import './styles/global.css'
import './styles/manuscript.css'

/* 在首帧之前打标：滚动入场的「隐藏态」只在 JS 可用时生效（脚本挂了也不会白屏） */
document.documentElement.classList.add('js-reveal')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
