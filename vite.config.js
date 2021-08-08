import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import mdPlugin from 'vite-plugin-markdown'
import { Mode } from 'vite-plugin-markdown'
import Ubeac from './src/loader'

import postcss from 'postcss';
import postcssRTLCSS from 'postcss-rtlcss';
import postcssRTLCSSOptions from 'postcss-rtlcss/options';

const path = require('path');

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: "vue/dist/vue.esm-browser.js",
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssRTLCSS(postcssRTLCSSOptions)
      ]
    }
  },
  plugins: [
    Ubeac,
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

