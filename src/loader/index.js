export default UbeacLoader = {
  name: 'ubeac-loader',
  transform(code, id) {
    if (id.includes('src/')) {
      const modelRegex = /\smodel=/ig;
      const out = code.replace(modelRegex, 'v-model=')
      return out
    }
    return code
  }
}

