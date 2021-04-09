<template>
  <div>
    <button v-bind="$attrs" :disabled="disabled">
      {{ label }}
    </button>
    <q-btn color="primary" label="Primary" />
  </div>
</template>
<script>
import { LabelMixin } from "../../mixins/component-mixins";
export default {
  inheritAttrs: false,
  mixins: [LabelMixin],
  data() {
    return {
      disabled: false
    };
  },
  // methods: {
  //   onClick() {
  //     this.$emit("click");
  //   }
  // }
};
</script>