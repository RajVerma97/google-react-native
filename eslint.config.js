const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const hooksPlugin = require('eslint-plugin-react-hooks');
const globals = require('globals');

module.exports = [
  js.configs.recommended,

  // TypeScript configuration for `src`
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
        jsx: true,
      },
      globals: {
        ...globals.browser,
        __d: 'readonly', // Add __d as a global variable
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': hooksPlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'no-func-assign': 'error',
    },
  },

  // Node.js configuration for config files and scripts
  {
    files: ['babel.config.js', 'metro.config.js', 'tailwind.config.js', 'scripts/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script', // Use CommonJS
      globals: {
        ...globals.node, // Add Node.js globals
      },
    },
    rules: {
      'no-undef': 'off', // Disable no-undef for Node.js files
      'no-console': 'off', // Disable no-console for scripts
    },
  },
];
