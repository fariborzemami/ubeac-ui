import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import mdPlugin from 'vite-plugin-markdown'
import { Mode } from 'vite-plugin-markdown'

export default defineConfig({
  alias: {
    vue: "vue/dist/vue.esm-browser.js",
  },
  plugins: [
    vue(), 
    Pages(),
    mdPlugin({
      mode: Mode.VUE
    }),
    Layouts({
      layoutsDir: 'src/layouts'
    })
  ]
})

