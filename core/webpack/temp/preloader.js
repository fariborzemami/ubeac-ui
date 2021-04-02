module.exports = function (source, map) {
    console.log('\npre-loader')
    this.callback(
      null,
      source,
      map
    );
  }