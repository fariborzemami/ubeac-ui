<template>
  <button type="button" class="btn" :class="buttonClass">
    <slot>Submit</slot>
  </button>
</template>
<script>

const buttonProps = {
  variant: {
    type: String,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export default {
  inheritAttrs: true,
  props: buttonProps,
  setup(props){
    // props = _props
    console .log(props)
    // defineProps(buttonProps)
  },
  computed: {
    buttonClass() {
      return ["btn", "btn-" + this.variant];
    },
  },
};
</script>