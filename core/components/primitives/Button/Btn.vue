<template>
  <button type="button" class="btn" :class="buttonClass" v-bind="$attrs">
    <slot>{{ text }}</slot>
  </button>
</template>
<script>

const _props = {
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "alert"].includes(value), // TODO: move variants to constants.js
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "Button",
  },
  visible: {
    type: Boolean,
    default: true,
  },
};


export default {
  inheritAttrs: false,
  props: { ..._props },
  computed: {
    buttonClass() {
      return ["btn", "btn-" + this.variant];
    },
  }
};

</script>