<template>
  <div>
    <button class="btn" :class="additionalClass">
      <slot></slot>
    </button>
  </div>
</template>
<script>

// available types
const types = {
  submit: "btn-success",
  cancel: "btn-secondary",
  danger: "btn-danger",
};

export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "submit",
      validator: (value) => {
        if (!types[value])
          console.error(
            `UBtn: type property is not correct, available types: ${JSON.stringify(
              Object.getOwnPropertyNames(types)
            )}`
          );
        return types[value];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    
  },
  computed: {
    additionalClass() {
      return types[this.type];
    },
  },
};
</script>