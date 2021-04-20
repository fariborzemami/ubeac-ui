<template>
  <input
    class="form-control"
    :type="type"
    :placeholder="placeholder"
    aria-label="default input example"
    v-model="textValue"
    @focus="focus = true"
    @blur="focus = false"
  />
</template>
<script>
import { ref } from "vue";
export default {
  inheritAttrs: true,
  props: {
    type: {
      type: String,
      default: "text"
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