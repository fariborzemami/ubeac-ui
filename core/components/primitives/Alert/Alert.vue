<template>
  <div :class="alertClass" v-bind="$attrs" role="alert" v-show="visible">
    <slot>{{ text }}</slot>
  </div>
</template>
<script>
const _props = {
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "alert", "danger"].includes(value), // TODO: move variants to constants.js
  },
  text: {
    type: String,
    default: "Button",
  },
};

export default {
  inheritAttrs: false,
  props: { ..._props },
  data() {
    return {
      visible: true,
    };
  },
  computed: {
    alertClass() {
      return ["alert", "alert-" + this.variant];
    },
  }
};
</script>