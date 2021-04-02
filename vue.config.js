const webpackFilesPath = './core/webpack'
const VuePagePlugin = require(webpackFilesPath + '/plugins/page-plugin')

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(vue)$/i,
          loader: require.resolve(webpackFilesPath + '/loaders/page-loader.js')
        }
      ]
    },
    plugins: [new VuePagePlugin()],
  }
}