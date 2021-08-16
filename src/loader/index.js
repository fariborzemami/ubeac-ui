import En from "../locale/en"

// DOC: https://github.com/vitejs/vite/tree/main/packages/plugin-vue#options
export default UbeacLoader = {
  name: 'ubeac-loader',
  transform(code, id) {
    if (id.includes('src/pages') || id.includes('src/components')) {
      let out
     
      // model
      const modelRegex = /\smodel=/ig
      out = code.replace(modelRegex, 'v-model=')
      
      // i18n 
      const i18nRegex = /__[A-Za-z-]+__/ig
      const i18nfound = code.match(i18nRegex)
      if (i18nfound) {
        i18nfound.forEach((item) => {
          const key = item.slice(2, item.length - 2)
          out = out.replace(item, En[key])
        })
      }
      return out
    }
    return code
  }
}

