

module.exports = function (source, map) {
  var pageConfig = JSON.parse(source)
  var out = `  
  export default function (Component) {
    const pageConfig = ${JSON.stringify(pageConfig)}
    Component.options.data = function () {
      return { page: pageConfig }
    }
  }`
  this.callback(
    null,
    out,
    map
  );
}