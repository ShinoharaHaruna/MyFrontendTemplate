import React, { useEffect, useState } from "react";

function App() {
  // Dark mode toggle state & side-effects
  // 暗色模式开关的状态与副作用
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    // Initialize from localStorage or OS preference
    // 从本地存储或系统偏好初始化
    const stored = localStorage.getItem("theme.dark");
    if (stored === "true") {
      setDark(true);
      document.documentElement.classList.add("dark");
      return;
    }
    if (stored === "false") {
      setDark(false);
      document.documentElement.classList.remove("dark");
      return;
    }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    // Persist preference & toggle class on <html>
    // 持久化偏好并在 <html> 上切换类
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme.dark", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme.dark", "false");
    }
  }, [dark]);

  return (
    // Root container with gradient background, responsive typography and dark mode colors
    // 根容器：渐变背景、响应式排版与暗色模式颜色
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-100 antialiased">
      {/* Theme Toggle（主题切换按钮）*/}
      <div className="fixed right-4 top-4 z-50">
        <button
          onClick={() => setDark((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur px-4 py-2 text-sm font-medium shadow-lg ring-1 ring-slate-900/10 dark:ring-white/10 hover:shadow-xl transition"
          aria-label="Toggle dark mode"
        >
          <span className="h-2 w-2 rounded-full bg-slate-900 dark:bg-white shadow ring-1 ring-black/10"></span>
          <span className="text-slate-700 dark:text-slate-200">{dark ? "Dark" : "Light"}</span>
        </button>
      </div>

      {/* Header: title + subtitle（标题与副标题）*/}
      <header className="px-6 py-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Tailwind CSS Demo</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Utility-first • Responsive • Dark mode • Transitions
        </p>
      </header>

      {/* Feature cards grid（特性卡片网格）：响应式 1/2/3 列 */}
      <main className="px-6 pb-16">
        <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Utility-first（工具类优先）*/}
          <section className="group rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur shadow-lg ring-1 ring-slate-900/5 dark:ring-white/10 p-6 transition hover:shadow-xl">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-sm ring-1 ring-black/5">
              <span className="text-xl">⚡</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Utility-first</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Build UI by composing small, single‑purpose utility classes.
            </p>
            <button
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-3 py-2 text-sm font-medium shadow-sm ring-1 ring-black/10 hover:translate-y-[-1px] hover:shadow-md active:translate-y-0 transition"
            >
              <span>Try it</span>
              <span>→</span>
            </button>
          </section>

          {/* Card 2: Responsive（响应式）*/}
          <section className="group rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur shadow-lg ring-1 ring-slate-900/5 dark:ring-white/10 p-6 transition hover:shadow-xl">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-sm ring-1 ring-black/5">
              <span className="text-xl">📱</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Responsive</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Use breakpoints like <code className="font-semibold">sm</code>, <code className="font-semibold">md</code>, <code className="font-semibold">lg</code> to adapt layouts.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-2 py-1 text-xs shadow ring-1 ring-black/10">sm:grid-cols-2</span>
              <span className="rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-2 py-1 text-xs shadow ring-1 ring-black/10">lg:grid-cols-3</span>
            </div>
          </section>

          {/* Card 3: Dark mode + transitions（暗色模式与过渡）*/}
          <section className="group rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur shadow-lg ring-1 ring-slate-900/5 dark:ring-white/10 p-6 transition hover:shadow-xl">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-sm ring-1 ring-black/5">
              <span className="text-xl">🌙</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Dark mode & Transitions</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Colors and shadows adapt to dark mode, with smooth hover/active transitions.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center justify-center rounded-lg border border-slate-300/70 dark:border-white/20 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50/60 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 transition"
            >
              Focus ring demo
            </a>
          </section>
        </div>
      </main>

      {/* Footer（页脚）*/}
      <footer className="px-6 pb-10 text-center text-xs text-slate-500 dark:text-slate-400">
        Powered by Tailwind CSS v4
      </footer>
    </div>
  );
}

export default App;
