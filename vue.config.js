module.exports = {
    configureWebpack: {
      module: {
        rules: [
          {
            resourceQuery: /blockType=page/,
            loader: require.resolve('./page-loader.js')
          }
        ]
      },
    }
  }