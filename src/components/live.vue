<template>
  <vue-live
    :editor-props="{
      lineNumbers: true,
      tabSize: 4
    }"
    :code="code"
  />
</template>

<script>
import { VueLive } from "vue-live";
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere
import "prismjs/themes/prism-funky.css" // import syntax highlighting styles

export default {
  components: {
    VueLive: VueLive
  },
  props: {
    code: {
      type: String,
      default: ''
    }
  }
}
</script>

