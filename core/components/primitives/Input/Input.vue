<template>
  <input
    class="form-control"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: String
  }
};
</script>