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
  modelValue: String
};

const inputEmits = ["update:modelValue"];

import { ref } from "vue";
export default {
  inheritAttrs: true,
  emits: inputEmits,
  props: {...inputProps},
  setup() {

    const focus = ref(false);

    // const onInput = (e) => {
    //   let value = e.target.value
    //   console.log('first')
    //   emit("update:modelValue", value);
    // };

    return { focus };
  },
  methods: {
    onInput(event) {
      console.log('first', event)
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>