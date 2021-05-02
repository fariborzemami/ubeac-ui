<template>
  <label :for="id" class="form-label">{{ label }}</label>
  <u-input :id="id" v-bind="$attrs" />
</template>
<script>
const uniqueId = require("lodash.uniqueid");

export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "Label"
    }
  },
  data() {
    return {
      id: null
    };
  },
  mounted() {
    this.id = uniqueId();
  }
};
</script>