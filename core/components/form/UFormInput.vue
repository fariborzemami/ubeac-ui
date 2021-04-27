<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <u-input :id="id" v-bind="$props" :model="modelValue" @input="onInput" />
  </div>
</template>
<script>
import { ref } from "vue";

const inputProps = {
  placeholder: null,
  modelValue: null
};

export default {
  inheritAttrs: false,
  emits: ["update:modelValue"],
  props: {
    ...inputProps,
    label: {
      type: String,
      default: "Label",
    },
    id: {
      type: String,
    }
  },
  setup() {
    const focus = ref(false);
    return { focus };
  },
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>