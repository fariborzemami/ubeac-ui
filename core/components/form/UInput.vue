<template>
  <q-input outlined v-model="value" :label="label" dense="true">
  </q-input>
</template>
<script>
export default {
  inheritAttrs: false,
  props: ["modelValue", "label"],
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>