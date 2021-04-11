<template>
  <div>
    {{ label }}
    <input
      type="text"
      v-model="value"
    />
    <slot />
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: ['modelValue', 'label'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
};
</script>