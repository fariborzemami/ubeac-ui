<template>
  <vue-live
    :editorProps="{
                  lineNumbers: true,
                  tabSize: 4
                  }"
    :code="code">
  </vue-live>

</template>

<script>
import { VueLive } from "vue-live";
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere
import "prismjs/themes/prism-funky.css" // import syntax highlighting styles

export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  components: {
    VueLive: VueLive
  }
}
</script>

