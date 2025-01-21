// const js = require('@eslint/js');
// const tsParser = require('@typescript-eslint/parser');
// const tsPlugin = require('@typescript-eslint/eslint-plugin');
// const reactPlugin = require('eslint-plugin-react');
// const hooksPlugin = require('eslint-plugin-react-hooks');
// const globals = require('globals');

// module.exports = [
//   js.configs.recommended,

//   {
//     files: ['src/**/*.{ts,tsx}'],
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         project: './tsconfig.json',
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//         jsx: true,
//       },
//       globals: {
//         ...globals.browser,
//         __d: 'readonly',
//       },
//     },
//     plugins: {
//       '@typescript-eslint': tsPlugin,
//       react: reactPlugin,
//       'react-hooks': hooksPlugin,
//     },
//     rules: {
//       'no-unused-vars': 'warn',
//       'no-console': 'warn',
//       'react-hooks/rules-of-hooks': 'error',
//       'react-hooks/exhaustive-deps': 'warn',
//       '@typescript-eslint/no-unused-vars': 'warn',
//       'react/jsx-uses-react': 'error',
//       'react/jsx-uses-vars': 'error',
//       'no-func-assign': 'error',
//     },
//   },

//   {
//     files: ['babel.config.js', 'metro.config.js', 'tailwind.config.js', 'scripts/**/*.js'],
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'script',
//       globals: {
//         ...globals.node,
//       },
//     },
//     rules: {
//       'no-undef': 'off',
//       'no-console': 'off',
//     },
//   },
// ];
import globals from 'globals';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';

export default [
  // JavaScript defaults
  js.configs.recommended,

  // Global settings
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // TypeScript files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // React files
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Import plugin rules
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
    },
  },

  // Common rules for all files
  {
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'max-len': ['warn', { code: 100 }],
    },
  },
];
