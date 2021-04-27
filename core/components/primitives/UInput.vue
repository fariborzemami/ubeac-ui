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
import { ref } from "vue";

const inputProps = {
  placeholder: null,
  modelValue: null
};

const inputEmits = ["update:modelValue"];

export default {
  inheritAttrs: true,
  emits: inputEmits,
  props: inputProps,
  setup(props, { emit }) {

    const focus = ref(false);

    const onInput = (event) => {
      emit("update:modelValue", event.target.value);
    };

    return { focus, onInput };
  }
};
</script>