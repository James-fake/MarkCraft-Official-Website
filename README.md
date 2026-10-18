# MarkCraft 官网（markcraft-website）

> MarkCraft 的产品官网 —— 现代化 Markdown 编辑器 · 个人知识工坊 · 博客生成器。

本目录是**独立于桌面应用**的官网项目，与主仓 `markcraft`（Electron 桌面应用）解耦：

- 独立 `package.json` / 构建 / 依赖，不引入 Electron 或桌面文件系统能力；
- 纯前端静态站点，第一阶段不含服务端数据库、账号系统或复杂后端；
- 以《[MarkCraft 官网设计蓝图 v1.1](./docs/MarkCraft_Website_Blueprint_v1.1.md)》为设计与产品边界依据。

> **视觉方向（2026-10-15 重设计 + 第二轮升级）**：主视觉采用 **「手稿 × 星图」** —— 不再使用任何产品截图。
> MarkCraft 是 Markdown 工具，最诚实也最好看的视觉就是**把 Markdown 本身排好版**。
> 首屏是 **「夜书房」**：深墨画布 + 一页大幅暖纸手稿（含语法标记与页边目录），
> 稿纸里的 `[[链接]]` 长出连线汇入笔记星图，焦点行会像被写出来一样逐字浮现。
> 全部由站点自有字体与 SVG 构成，**零图片资源**，构建产物 ~185KB。
>
> 历史沿革：v1.0「可交互虚拟应用 Demo」→ v1.1「自动播放式 Product Film」→「手稿 × 星图（浅底）」→「手稿 × 星图（夜书房）」。
> 前两版均依赖产品截图，在缩略尺度下会糊成视觉噪音、且冷暖色温与暖纸底打架，故整体退役。

## 页面叙事（9 节漏斗）

| # | 章节 | 锚点 | 作用 |
|---|---|---|---|
| 01 | Hero · 夜书房 | `#top` | 概念：手稿正在被写就 |
| 02 | Statement | `#statement` | 为什么：笔记不该停在保存那一刻 |
| 03 | Craft | `#craft` | 怎么用：源码 ⇄ 渲染跨页并置 |
| 04 | Connection | `#connection` | 连接：笔记星图（深色章节） |
| 05 | Possibility | `#possibility` | 能做什么：能力总览（**刻意安静，无大视觉**） |
| 06 | Output | `#output` | 输出：13 个主题小样 + 12 种导出格式 |
| 07 | Local-first | `#local` | 信任：文件就是 .md、不经过服务器 |
| 08 | FAQ | `#faq` | 答疑：原生 `<details>` 折叠 |
| 09 | Download | `#download` | 行动：真实版本 / 体积 / 分卷说明 |

> 章节节奏刻意分级：有的节有大视觉（Hero / Craft / Connection / Output），有的节只有文字（Possibility），
> 避免「每节都是标题 + 大块视觉」造成的平板感。

## 视觉语言：手稿 × 星图

| 元素 | 文件 | 说明 |
|---|---|---|
| 手稿页 | `features/manuscript/ManuscriptPage.tsx` | 把 Markdown 的**语法**（`#` `>` `-` `[[ ]]`）与**渲染结果**排出来；`mode="source" \| "rendered"`；焦点行有逐字书写动效 |
| 星图 | `features/manuscript/Constellation.tsx` | 发丝级 SVG 节点网络，几何取自 `demoNotes`，**刻意非对称**；明暗底色通过**覆写颜色令牌**复用同一组件 |
| 首屏背景 | `features/manuscript/ManuscriptBackdrop.tsx` | 手稿 + 连线 + 星图 + 低频焦点时钟；离屏/后台暂停、reduced-motion 冻结 |
| 内容与几何 | `features/manuscript/manuscriptData.ts` | 手稿行、页边目录、星图节点/连线坐标（0–100 归一化） |
| 滚动入场 | `hooks/useReveal.ts` | 首帧前打 `data-reveal`；隐藏态挂在 `.js-reveal` 之下（脚本挂了不白屏） |

## 技术栈

- React 18 + TypeScript + Vite 5
- 无路由库（单页 + 锚点导航）；无动画库（纯 CSS 动画 + 低频 JS 状态）
- 样式：原生 CSS + 设计令牌（`src/styles/tokens.css`）

## 开发命令

```bash
npm install       # 安装依赖
npm run dev       # 本地开发预览（默认 http://localhost:5173）
npm run build     # 生产构建，产出 dist/
npm run preview   # 预览生产构建
npm run typecheck # 类型检查
```

## 目录结构

```text
website/
├─ public/
│  └─ favicon.svg                    # 唯一静态资源（主视觉零图片）
├─ src/
│  ├─ app/App.tsx                    # 首页组装（9 节叙事漏斗）
│  ├─ components/{layout,navigation,buttons,ui}/
│  ├─ hooks/useReveal.ts             # 滚动入场
│  ├─ sections/                      # Hero / Workflow / Craft / Connection / Possibility
│  │                                 # Output / Local / Faq / Download / Footer
│  ├─ features/manuscript/           # 手稿 × 星图：ManuscriptPage / Constellation / ManuscriptBackdrop / manuscriptData
│  ├─ data/                          # demoNotes / featureList / blogThemes
│  ├─ config/                        # siteConfig / downloadConfig（集中配置）
│  └─ styles/                        # tokens.css / global.css / manuscript.css
├─ docs/
│  ├─ MarkCraft_Website_Blueprint_v1.1.md
│  └─ reference-screenshots/         # 已退役的真实截图（归档保留，**不参与构建**）
```

> `docs/reference-screenshots/` 里是早前采集的产品截图。当前设计不再使用它们，
> 移出 `public/` 以免打进产物（1.7MB）。若将来需要，可随时取回。

## 重要约束（来自蓝图）

1. **不伪造**：不使用 AI 生成的假界面冒充真实软件；开发中能力不得宣传为已上线。
2. **下载信息真实**：版本、大小、系统要求等需核实；未确认项不展示。
3. **主视觉零图片**：主视觉不用产品截图，全部由站点自有排版与 SVG 构成 —— 因此不存在「示意图冒充真实产品」的风险，也不需要维护截图素材。
4. **文案中的能力声明须核实**：例如「导出 · HTML / PDF / EPUB / DOCX」与「主题 · 水墨 / 报纸」均已在主仓 `src/features/export/utils/` 与 `src/features/blog/themes/` 中核对存在。
5. **无障碍**：支持键盘操作、清晰焦点状态与 `prefers-reduced-motion`（冻结为静态构图，内容全保留）。
6. **配置集中化**：下载地址、版本、功能开关等集中在 `src/config/`，禁止硬编码假数据。
7. **性能纪律**：动画只走 `transform` / `opacity` / `stroke-dashoffset`；唯一的 JS 状态是 5.2s 一次的焦点索引，不逐帧渲染；离屏与后台自动暂停。

### ⚠️ 下载方式特别说明

Gitee 免费版对单个文件限制 100MB（含 Releases 附件），MarkCraft 安装包单个 exe 约 201MB，
无法整体托管。因此安装包以**分卷（volume）**形式托管在独立仓库：

- 安装包仓库：<https://gitee.com/James-fake/markcraftxiazaicangdianhua>
- 用户 `git clone` 后运行仓库内合并脚本还原为完整 exe。

下载区（`DownloadSection`）与 `downloadConfig.ts` 已按此真实约束编写，未使用虚构直链。

## 部署（待接入）

当前阶段**先不部署**。项目已为静态站点部署做好准备：

- `vite.config.ts` 中 `base: './'`，使用相对路径，可部署到子路径；
- 构建产物为纯静态 `dist/`，适配 GitHub Pages / Gitee Pages / 任意静态托管。

后续接入建议：

- **GitHub Pages**：推送仓库后添加 `actions/deploy-pages` 工作流，push 即自动构建部署；
- **Gitee Pages**：免费版自动部署受限，通常需在网页端点「更新」或使用企业版；
- 也可两者同时部署作为镜像。

## 与主仓的关系

本项目计划作为**独立 git 仓库**维护。主仓 `markcraft` 可通过 `.gitignore` 忽略本目录，
避免官网代码混入桌面应用仓库。若最终选择「主仓子目录」方案，则无需单独 `git init`。
