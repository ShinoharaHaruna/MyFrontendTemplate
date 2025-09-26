# My Frontend Template

[中文](README_cn.md)

[![Made with Love](https://img.shields.io/badge/Made%20with-Love-1f425f.svg)](https://github.com/ShinoharaHaruna/MyFrontendTemplate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, opinionated, and out-of-the-box frontend template designed for rapid project initiation. This template is built with React, TypeScript, and utilizes Yarn Berry for efficient package management.

## ✨ Features

- **React 18**: The latest version of the popular UI library.
- **TypeScript**: For static typing and improved developer experience.
- **Vite**: Next generation frontend tooling for a fast development experience.
- **Yarn Berry (PnP)**: Modern, reliable, and fast package management.
- **ESLint & Prettier**: Integrated for consistent code style and quality.
- **Path Aliases**: Pre-configured with `@/` pointing to the `src` directory.
- **Vercel Ready**: Pre-configured for seamless deployment on Vercel.

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

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
