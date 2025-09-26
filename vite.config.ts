import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const { default: tailwindcss } = await import('@tailwindcss/vite');

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        // Set '@' to point to the 'src' directory.
        // 设置 '@' 指向 'src' 目录。
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
