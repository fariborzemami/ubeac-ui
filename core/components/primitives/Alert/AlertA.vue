<template>
  <div :class="alertClass" v-bind="$attrs" role="alert" v-show="getVisibility">
    <slot>{{ text }}</slot>
  </div>
</template>
<script>

const _props = {
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "alert", "danger"].includes(value), // TODO: move variants to constants.js
  },
  text: {
    type: String,
    default: "Alert!",
  },
  visible: {
    type: [Boolean, String],
    default: true,
  },
};


export default {
  inheritAttrs: false,
  props: { ..._props },
  computed: {
    alertClass() {
      return ["alert", "alert-" + this.variant];
    },
    getVisibility()
    {
        return String(this.visible) === "true";
    }
  }
};

</script>