import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
// import prerender from 'vite-plugin-prerender'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    // prerender({
    //   staticDir: 'dist',
    //   routes: ['/', '/about', '/projects', '/contact'],
    // }),
  ],
  // vueDevTools()
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist', // Default build output folder
    rollupOptions: {
      external: [], // Ensure `vue` is not marked as external
    },
  },
  assetsInclude: ['**/*.JPG'],
})
