<template>
    <label :for="id" class="form-label">{{ label }}</label>
    <u-input :id="id" v-bind="$attrs" :value="modelValue" @input="onInput"/>
</template>
<script>

const inputProps = {
  placeholder: null,
  modelValue: String
};

const inputEmits = ["update:modelValue"];

export default {
  inheritAttrs: false,
  emits: inputEmits,
  props: {
    ...inputProps,
    label: {
      type: String,
      default: "Label",
    }
  },
  data(){
    return {
      id: this.modelValue
    }
  },
  methods: {
    onInput(event) {
      console.log('second', event)
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>