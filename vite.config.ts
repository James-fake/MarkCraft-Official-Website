import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// MarkCraft 官网构建配置。
// base: './' —— 使用相对路径，便于部署到 Gitee Pages / GitHub Pages 的子路径（如 /markcraft-website/）。
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
