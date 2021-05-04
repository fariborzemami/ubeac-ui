<template>
  <!-- <div type="button" :class="alertClass" v-bind="$attrs" role="alert" v-show="getVisibility">
    <slot>{{ text }}</slot>
  </div> -->
  <div type="button" :class="alertClass" v-bind="$attrs" role="alert" v-show="visible1">
    <slot>{{ text }}</slot> visible: {{visible1}}
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
    default: "Button",
  },
  visible: {
    type: [Boolean, String],
    default: false,
  },
};


export default {
  inheritAttrs: false,
  props: { ..._props },
  data(){
      return {
          visible1 :false
      }
  },
  computed: {
    alertClass() {
      return ["alert", "alert-" + this.variant];
    },
    getVisibility()
    {
        return this.visible === "true";
    }
  }
};

</script>