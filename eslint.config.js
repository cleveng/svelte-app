import { fileURLToPath } from 'node:url'

import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import svelte from 'eslint-plugin-svelte'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import ts from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'

import svelteConfig from './svelte.config.js'

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url))

export default defineConfig(
  includeIgnoreFile(gitignorePath),
  {
    ignores: ['eslint.config.js', 'src/lib/components/ui/**', 'src/lib/generated/**', 'src/lib/graphql/**'],
  },
  {
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
    },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  prettier,
  ...svelte.configs.prettier,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },

    rules: {
      // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
      // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      'no-undef': 'off',
      'no-console': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      // Enforce type-only imports for TypeScript types
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      // Prevent duplicate imports from the same module
      'no-duplicate-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      // ✅ 自动删除未使用的 import
      'unused-imports/no-unused-imports': 'error',
      // ✅ 未使用变量允许用 _ 开头忽略
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js 核心模块
            'external', // 第三方库，如 react, lodash
            'internal', // 内部模块（别名路径如 @/）
            ['parent', 'sibling'], // 父目录和同级目录
            'index', // 当前目录（index.js/ts）
            'object', // 对象导入（import log = console.log）
            'type', // TypeScript 的类型导入
          ],
          pathGroups: [
            {
              pattern: '$app/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '$lib/components/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '$lib/layouts/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '$lib/config/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '$lib/assets/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '$lib/plugins/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '$lib/store/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '$lib/generated/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '$lib/enums/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '$lib/hooks/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '$lib/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '/#/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],

    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: ts.parser,
        svelteConfig,
      },
    },
  }
)
