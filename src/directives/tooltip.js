import Tooltip from 'bootstrap/js/src/tooltip.js'
export default {
  mounted (el, binding, vnode) {
    el.setAttribute('title', binding.value)
    el.tooltip = new Tooltip(el)
  }
}
