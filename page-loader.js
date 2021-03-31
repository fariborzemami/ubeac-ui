module.exports = function (source, map) {
  // console.log('\npage-loader')
  var pageConfig = JSON.parse(source)
  var out = `  
  import binder from '/binder.js'
  export default function (Component) {
    binder(Component)
    // const pageConfig = ${JSON.stringify(pageConfig)}
    // Component.options.data = function () {
    //   return { page: pageConfig }
    // }
  }`
  this.callback(
    null,
    out,
    map
  );
}