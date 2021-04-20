<template>
  <button class="btn" :class="additionalClass" @click="onClick">
    <slot></slot>
  </button>
</template>
<script>
// available types
const types = {
  submit: "btn-primary",
  cancel: "btn-secondary",
  danger: "btn-danger"
};

export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "submit",
      validator: value => {
        if (!types[value])
          console.error(
            `UButton: type property is not correct, available types: ${JSON.stringify(
              Object.getOwnPropertyNames(types)
            )}`
          );
        return types[value];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const onClick = value => {
      emit("click", value);
    };
    return { onClick };
  },
  computed: {
    additionalClass() {
      return types[this.type];
    }
  }
};
</script>