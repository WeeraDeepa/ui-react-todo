import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import perfectionist from 'eslint-plugin-perfectionist'; // Pro tip: auto-sorts imports

export default [
  // 1. Global Ignores
  { ignores: ['dist', 'node_modules', 'public'] },

  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      perfectionist,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' }, // Automatically detects React version
    },
    rules: {
      // --- Recommended Basics ---
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // --- Pro React Rules ---
      'react/prop-types': 'off', // Modern React uses Destructuring/TS instead
      'react/jsx-no-leaked-render': ['error', { validStrategies: ['coerce', 'ternary'] }], // Prevents "0" appearing in UI
      'react/self-closing-comp': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // --- Perfectionist (Auto-sorting for clean code) ---
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          groups: [
            'type',
            'react',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
        },
      ],

      // --- General Cleanliness ---
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Allows variables starting with _
      'no-console': ['warn', { allow: ['warn', 'error'] }],    // Keeps production logs clean
    },
  },
];