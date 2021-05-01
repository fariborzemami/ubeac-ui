<template>
  <input
    class="form-control"
    :placeholder="placeholder"
    :value="modelValue"
    @input="onInput"
    @focus="focus = true"
    @blur="focus = false"
  />
</template>
<script>

const inputProps = {
  placeholder: null,
  modelValue: null
};

const inputEmits = ["update:modelValue"];

import { ref } from "vue";
export default {
  inheritAttrs: true,
  emits: inputEmits,
  props: inputProps,
  setup(props, { emit }) {

    const focus = ref(false);

    const onInput = (e) => {
      let value = e.target.value
      emit("update:modelValue", value);
    };

    return { focus, onInput };
  }
};
</script>