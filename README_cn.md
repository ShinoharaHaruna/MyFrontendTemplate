# My Frontend Template

[English](README.md)

[![Made with Love](https://img.shields.io/badge/Made%20with-Love-1f425f.svg)](https://github.com/ShinoharaHaruna/MyFrontendTemplate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

一个现代的、有明确技术选型的、开箱即用的前端模板，旨在快速启动新项目。现在内置了基于 shadcn-ui 的仪表盘示例，使用 React、TypeScript、Tailwind CSS v4 构建，并由 Yarn Berry 管理。

## ✨ 功能

- **React 19**: 采用最新的 React 运行时，解锁更先进的并发能力。
- **TypeScript（strict）**: 静态类型支持，带来更安全、更高效的反馈循环。
- **Vite 7**: 几乎即时的开发服务器启动与极速 HMR。
- **Tailwind CSS v4 + shadcn-ui**: 预装 `Tabs`、`Card`、`Switch` 等组件，设计变量开箱即用。
- **Yarn Berry (PnP)**: 现代、可靠、支持 zero-install 的包管理。
- **ESLint & Prettier**: 与 `.editorconfig` 协同的统一 lint 与格式化配置。
- **Path Aliases**: `@/` 指向 `src` 目录，导入路径更简洁。
- **Vercel Ready**: 针对 Yarn PnP 的部署说明已就绪。

## 🎨 示例概览

- **仪表盘布局**: `src/App.tsx` 利用 shadcn-ui 组件展示多列卡片、标签页与时间线。
- **暗色模式持久化**: `Switch` 组件控制主题，并将偏好同步到 `localStorage`。
- **协作场景聚焦**: 团队列表、里程碑与活动信息展示快速搭建复杂界面的思路。

## 🚀 快速开始

1. **使用模板**: 点击 GitHub 上的 “Use this template” 按钮，或直接克隆本仓库。

    ```bash
    git clone https://github.com/ShinoharaHaruna/MyFrontendTemplate.git
    cd MyFrontendTemplate
    ```

2. **安装依赖**: 本项目使用 Yarn Berry。请确保你已启用 `corepack`。

    ```bash
    corepack enable
    yarn install
    ```

3. **运行开发服务器**: 启动 Vite 开发服务器。

    ```bash
    yarn dev
    ```

## 🔁 Fork 设置助手

在 fork 后，可以运行 `scripts/setup-fork.sh` 自动进行重命名与上游配置：

```bash
./scripts/setup-fork.sh --repo-owner your-github --repo-name awesome-template
```

- **脚本功能**
  - **package.json**: 更新 `name` 字段。
  - **README 系列**: 调整标题、徽章链接以及克隆命令指向你的仓库。
  - **Git 远程**: 配置 `origin` 为 fork 仓库、`upstream` 指向原模板（可自定义）。

- **常用参数**
  - `--project-title "Awesome Template"` 自定义 README 标题。
  - `--package-name awesome-template` 覆盖 npm 包名。
  - `--skip-remote` 若希望自行管理 git 远程。

运行 `./scripts/setup-fork.sh --help` 获取全部参数说明。如未赋予执行权限，可通过 `bash scripts/setup-fork.sh ...` 调用。

## 🔧 IDE 集成

本模板使用了 Yarn PnP 特性，这需要对 VS Code 等 IDE 进行简单设置，以提供正确的类型检查和模块解析。

运行以下命令为 VS Code 生成所需的 SDK 文件：

```bash
yarn dlx @yarnpkg/sdks vscode
```

运行此命令后，你可能需要重启 VS Code 或在命令面板中运行 `TypeScript: Restart TS server` 命令。

## 📁 项目结构

```text
.
├── .yarn/             # Yarn Berry files
├── src/
│   ├── App.tsx        # Main React component
│   ├── components/
│   │   └── ui/        # shadcn-ui components (button, card, tabs, ...)
│   ├── index.css      # Global styles
│   ├── lib/utils.ts   # Utility helpers (e.g., cn)
│   └── main.tsx       # Application entry point
├── .editorconfig      # Editor configuration
├── .eslintrc.cjs      # ESLint configuration
├── .gitignore         # Git ignore rules
├── index.html         # Vite entry HTML
├── LICENSE            # Project license
├── package.json       # Project metadata and dependencies
├── README.md          # This file
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

### 📦 可用脚本

- `yarn dev`: 启动开发服务器。
- `yarn build`: 构建用于生产环境的应用。
- `yarn lint`: 使用 ESLint 检查代码库。
- `yarn install`: 安装项目依赖。
- `yarn up`: 以交互方式更新依赖项。

## 🚢 部署

本模板已为在 [Vercel](https://vercel.com/) 上部署进行了优化。

### Vercel 集成

由于 Yarn v4+ 处理缓存的方式，你需要在 Vercel 项目设置中覆盖默认的安装命令。

1. 进入 **Settings > General**，并将 **Install Command** 覆盖为：

    ```bash
    YARN_CACHE_FOLDER=node_modules/.yarn-cache YARN_ENABLE_GLOBAL_CACHE=false yarn install
    ```

2. 进入 **Settings > Environment Variables**，并添加以下两个环境变量：

    ```text
    YARN_CACHE_FOLDER=node_modules/.yarn-cache
    YARN_ENABLE_GLOBAL_CACHE=false
    ```

> **注意**：这样可以确保 Vercel 使用项目 `node_modules` 目录下的本地缓存，而不是全局缓存，这对于构建过程的正常工作是必需的。

## 🧩 扩展 UI 组件库

使用官方的 shadcn-ui CLI 按需生成更多组件：

```bash
yarn dlx shadcn@latest add accordion dialog form
```

组件将自动落在 `src/components/ui/` 下，并与 Tailwind CSS 变量完成绑定。

## 📄 许可证

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。
