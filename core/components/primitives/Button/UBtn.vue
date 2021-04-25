<template>
  <button type="button" class="btn" :class="buttonClass" @click="onClickInner">
    <slot>{{ text }}</slot>
  </button>
</template>
<script>
import { getCurrentInstance } from 'vue'

const _props = {
  variant: {
    type: String,
    default: "primary",
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

const _methods = {
  onBeforeClick: function (emitter, event) {
    console.log("UBtn_onBeforeClick_out", event);
    emitter("onBeforeClick", event);
    return true;
  },
  onClick: function (emitter, event) {
    console.log("UBtn_click_out", event);
    emitter("onClick", event);
  },
  onAfterClick: function (emitter, event) {
    console.log("UBtn_onAfterClick_out", event);
    emitter("onAfterClick", event);
  },
};

// const _emits = ["click"];

export default {
  name: "UBtn",
  inheritAttrs: true,
  props: { ..._props },
  // emits: [..._emits],
  computed: {
    buttonClass() {
      return ["btn", "btn-" + this.variant];
    },
  },
  setup(props, { emit }) {
    console.log(getCurrentInstance())
    console.log(emit);
  },
  methods: {
    ..._methods,
    onClickInner: function (e) {
      if (this.onBeforeClick(this.$emit)) {
        this.onClick(this.$emit, e);
        this.onAfterClick(this.$emit, e);
      }
    },
  },
};
</script>