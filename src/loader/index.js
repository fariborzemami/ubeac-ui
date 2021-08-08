import En from "../locale/en"

// DOC: https://github.com/vitejs/vite/tree/main/packages/plugin-vue#options
export default UbeacLoader = {
  name: 'ubeac-loader',
  transform(code, id) {
    if (id.includes('src/pages') || id.includes('src/components')) {

      const modelRegex = /\smodel=/ig
      const i18nRegex = /__[A-Za-z-]+__/ig

      let out = code.replace(modelRegex, 'v-model=')
      const found = code.match(i18nRegex)
      if (found) {
        found.forEach((item) => {
          const key = item.slice(2, item.length - 2)
          out = out.replace(item, En[key])
        })
      }
      return out
    }
    return code
  }
}

