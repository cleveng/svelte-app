import { enhancedImages } from '@sveltejs/enhanced-img'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  return {
    plugins: [tailwindcss(), enhancedImages(), sveltekit()],
    esbuild: {
      // 生产环境下禁用console和debugger
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
  }
})
