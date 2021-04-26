<template>
  <button type="button" class="btn" :class="buttonClass" @click="onClickInner">
    <slot>{{ text }}</slot>
  </button>
</template>
<script>
import { getCurrentInstance } from "vue";

const _props = {
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "alert"].includes(value),
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
    console.log(getCurrentInstance());
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

// TODO: read about this:
// https://v3.vuejs.org/guide/render-function.html#functional-components
// const FunctionalComponent = (props, context) => {
//   // ...
// }

// TODO: read about this:
// https://v3.vuejs.org/api/composition-api.html#getcurrentinstance
// import { getCurrentInstance } from 'vue'

// const MyComponent = {
//   setup() {
//     const internalInstance = getCurrentInstance()

//     internalInstance.appContext.config.globalProperties // access to globalProperties
//   }
// }

// TODO: read about this:
// https://www.vuemastery.com/blog/vue-3-data-down-events-up/
// import { computed } from 'vue'
// export function useModelWrapper(props, emit, name = 'modelValue') {
//   return computed({
//     get: () => props[name],
//     set: (value) => emit(`update:${name}`, value)
//   })
// }
</script>