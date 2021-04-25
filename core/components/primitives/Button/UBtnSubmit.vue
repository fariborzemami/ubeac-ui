<template>
  <u-btn :color="color">
    <slot>Submit</slot>
  </u-btn>
</template>
<script>
import UBtn from './UBtn'
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
  components: { UBtn },
  props: { ...btnProps },
//   setup(props) {
//     // const { color } = toRefs(props);
//     const buttonClass = computed(() => ["btn", "btn-" + props.color]);
//     return { buttonClass };
//   },
//   setup(props) {
//     const { color } = toRefs(props);
//     const buttonClass = computed(() => ["btn", "btn-" + color]);
//     return { buttonClass };
//   }
    // computed: {
    //   buttonClass() {
    //     return ["btn", "btn-" + this.color];
    //   }
    // }
};
</script>