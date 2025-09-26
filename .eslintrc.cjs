module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react'],
  rules: {
    // Add custom rules here if needed
    // 如果需要，可以在这里添加自定义规则
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
