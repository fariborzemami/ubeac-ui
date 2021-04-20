<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
      <u-input :id="id" v-bind="$props" v-model="textValue" />
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: "Input Label"
    },
    id: {
      type: String
    },
    placeholder: null
  },
  setup() {
    const focus = ref(false);
    const textValue = ref(null);
    return { focus, textValue };
  }
};
</script>