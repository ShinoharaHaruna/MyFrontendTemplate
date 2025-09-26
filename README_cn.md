# My Frontend Template

[English](README.md)

[![Made with Love](https://img.shields.io/badge/Made%20with-Love-1f425f.svg)](https://github.com/ShinoharaHaruna/MyFrontendTemplate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

一个现代的、有明确技术选型的、开箱即用的前端模板，旨在快速启动新项目。该模板基于 React 和 TypeScript 构建，并使用 Yarn Berry 进行高效的包管理。

## ✨ 功能

- **React 18**: 使用最新版的流行 UI 库。
- **TypeScript**: 支持静态类型，提升开发体验。
- **Vite**: 下一代前端工具，提供极速的开发体验。
- **Yarn Berry (PnP)**: 使用现代、可靠、快速的包管理器。
- **ESLint & Prettier**: 集成了 ESLint 和 Prettier，以确保代码风格和质量的一致性。
- **Path Aliases**: 预设了 `@/` 路径别名，指向 `src` 目录。
- **Vercel Ready**: 已为 Vercel 平台预先配置，可实现无缝部署。

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
│   ├── index.css      # Global styles
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

## 📄 许可证

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。
