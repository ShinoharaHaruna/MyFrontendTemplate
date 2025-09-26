# My Frontend Template

[中文](README_cn.md)

[![Made with Love](https://img.shields.io/badge/Made%20with-Love-1f425f.svg)](https://github.com/ShinoharaHaruna/MyFrontendTemplate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, opinionated, and out-of-the-box frontend template designed for rapid project initiation. It now showcases a shadcn-ui powered dashboard demo, built with React, TypeScript, Tailwind CSS v4, and managed by Yarn Berry.

## ✨ Features

- **React 19**: Latest React runtime with modern concurrency improvements.
- **TypeScript (strict)**: Static typing for a safer, faster feedback loop.
- **Vite 7**: Instant dev server startup and lightning-fast HMR.
- **Tailwind CSS v4 + shadcn-ui**: Pre-styled components (`Tabs`, `Card`, `Switch`, etc.) with design tokens ready out of the box.
- **Yarn Berry (PnP)**: Modern, reliable, zero-install friendly package management.
- **ESLint & Prettier**: Opinionated linting and formatting configured with `.editorconfig`.
- **Path Aliases**: `@/` points to the `src` directory for ergonomic imports.
- **Vercel Ready**: Deployment notes tailored for Yarn PnP powered builds.

## 🎨 Demo Overview

- **Dashboard layout**: `src/App.tsx` renders multi-column cards, tabbed views, and a status timeline using shadcn-ui primitives.
- **Dark mode persistence**: A `Switch` component toggles the theme while syncing preference to `localStorage`.
- **Collaboration focus**: Team roster, milestones, and activity feed illustrate how to compose complex UI quickly.

## 🚀 Getting Started

1. **Use the Template**: Click the "Use this template" button on GitHub or clone the repository.

    ```bash
    git clone https://github.com/ShinoharaHaruna/MyFrontendTemplate.git
    cd MyFrontendTemplate
    ```

2. **Install Dependencies**: This project uses Yarn Berry. Make sure you have enabled `corepack`.

    ```bash
    corepack enable
    yarn install
    ```

3. **Run the Development Server**: Start the Vite development server.

    ```bash
    yarn dev
    ```

## 🔁 Fork Setup Helper

Automate common renaming steps after forking this repository with `scripts/setup-fork.sh`.

```bash
./scripts/setup-fork.sh --repo-owner your-github --repo-name awesome-template
```

- **What it does**
  - **package.json**: Renames the `name` field.
  - **README files**: Updates titles, badge links, and clone instructions to point at your fork.
  - **Git remotes**: Re-points `origin` to your fork and ensures `upstream` references the original template (configurable).

- **Key flags**
  - `--project-title "Awesome Template"` to customize README headings.
  - `--package-name awesome-template` to override the npm name.
  - `--skip-remote` if you prefer to manage git remotes manually.

Run `./scripts/setup-fork.sh --help` for the full option list. You can also invoke it with `bash scripts/setup-fork.sh ...` if execution permissions are not set.

## 🔧 IDE Integration (VS Code)

This template uses Yarn's Plug'n'Play (PnP) feature, which requires a small setup for IDEs like VS Code to provide correct type-checking and module resolution.

Run the following command to generate the necessary SDK files for VS Code:

```bash
yarn dlx @yarnpkg/sdks vscode
```

After running this, you may need to restart VS Code or run the `TypeScript: Restart TS server` command from the command palette.

## 📁 Project Structure

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

### 📦 Available Scripts

- `yarn dev`: Starts the development server.
- `yarn build`: Bundles the app for production.
- `yarn lint`: Lints the codebase using ESLint.
- `yarn install`: Installs project dependencies.
- `yarn up`: Interactively updates dependencies.

## Deployment

This template is optimized for deployment on [Vercel](https://vercel.com/).

### Vercel Integration

Due to how Yarn v4+ handles caching, you need to override the default install command in your Vercel project settings.

1. Go to **Settings > General** and override the **Install Command** with:

    ```bash
    YARN_CACHE_FOLDER=node_modules/.yarn-cache YARN_ENABLE_GLOBAL_CACHE=false yarn install
    ```

2. Go to **Settings > Environment Variables** and add the following two variables:

    ```text
    YARN_CACHE_FOLDER=node_modules/.yarn-cache
    YARN_ENABLE_GLOBAL_CACHE=false
    ```

> **Note**: This ensures that Vercel uses the local cache within your project's `node_modules` directory instead of a global cache, which is necessary for the build process to work correctly.

## 🧩 Extending the UI Library

Use the official shadcn-ui CLI to scaffold additional components on demand:

```bash
yarn dlx shadcn@latest add accordion dialog form
```

Components are placed under `src/components/ui/` and wired to Tailwind CSS variables automatically.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
