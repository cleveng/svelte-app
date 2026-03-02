import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import { enhancedImages } from '@sveltejs/enhanced-img'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const file = fileURLToPath(new URL('./package.json', import.meta.url))
const json = readFileSync(file, 'utf8')
const pkg = JSON.parse(json)

export default defineConfig(({ mode }) => {
  return {
    define: {
      __APPID__: JSON.stringify(pkg.appid),
      __VERSION__: JSON.stringify(pkg.version),
      __TOAST_ID__: JSON.stringify('global-toast'),
    },
    plugins: [tailwindcss(), enhancedImages(), sveltekit()],
    build: {
      sourcemap: true,
    },
    esbuild: {
      // 生产环境下禁用console和debugger
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
    optimizeDeps: {
      // [Function called outside component initialization](https://nearform.com/open-source/urql/docs/basics/svelte/)
      exclude: ['@urql/svelte', '@urql/core'],
    },
  }
})
