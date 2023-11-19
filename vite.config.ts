import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import viewport from 'postcss-mobile-forever'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'
import tailwindcss from 'tailwindcss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer(),
    Components({
    dts: true,
    resolvers: [VantResolver()],
    types: [],
  }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'vue-router',
      ],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '~@': path.join(__dirname, './src'),
      '@': path.join(__dirname, './src'),
      '~': path.join(__dirname, './src/assets'),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
        viewport({
          appSelector: '#app',
          viewportWidth: 375,
          maxDisplayWidth: 600,
        }),
      ],
    },
  },
})
