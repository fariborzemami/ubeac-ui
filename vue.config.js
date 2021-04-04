const webpackFilesPath = './core/webpack'
const VuePagePlugin = require(webpackFilesPath + '/plugins/page-plugin')

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(vue)$/i,
          loaders: [
            require.resolve(webpackFilesPath + '/loaders/vue-root-loader.js'),
            require.resolve(webpackFilesPath + '/loaders/vue-model-attr-loader.js')
          ]
        }
      ]
    },
    plugins: [new VuePagePlugin()],
  }
}