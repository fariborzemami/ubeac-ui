<template>
  <div>
    <button v-bind="$attrs" @click="onClick" :disabled="disabled">
      {{ label }}
    </button>
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
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>