module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(vue)$/i,
          loader: require.resolve('./core/loaders/page-loader.js')
        }
      ]
    },
  }
}