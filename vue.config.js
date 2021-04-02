const VuePagePlugin = require('./core/webpack/plugins/page-plugin')

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(vue)$/i,
          loader: require.resolve('./core/webpack/loaders/page-loader.js')
        }
      ]
    },
    plugins: [new VuePagePlugin()],
  }
}