<template>
  <button type="button" :class="buttonClass">
    <slot></slot>
  </button>
</template>
<script>

const colors = {
  primary: "primary",
  secondary: "secondary"
};

const btnProps = {
  color: {
    type: String,
    default: colors.primary
  }
};

export default {
  inheritAttrs: true,
  props: { ...btnProps },
  // setup(props) {
  //   // const { color } = toRefs(props);
  //   const buttonClass = computed(() => ["btn", "btn-" + props.color]);
  //   return { buttonClass };
  // },
  mounted() {
    
  },
  computed: {
    buttonClass() {
      return ["btn", "btn-" + this.color];
    }
  }
};
</script>