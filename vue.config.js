module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(vue)$/i,
          loader: require.resolve('./loaders/page-loader.js')
        }
      ]
    },
  }
}