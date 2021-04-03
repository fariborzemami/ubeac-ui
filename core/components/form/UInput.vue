  
<template>
  <div>
    {{ label }}
    <input type="text" v-bind="$attrs" :value="value" @input="onInput" />
    <slot />
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  // computed: {
  //   internalValue: function () {
  //     return this.$parent._data.model["email"]
  //   }
  // },
  // data() {
  //   return {
  //     // xxx: this.$parent._data.model["email"],
  //   };
  // },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    }
  },
  props: ["label", "value"],
  // created() {
  //   if (!this.$attrs["placeholder"]) {
  //     this.$attrs["placeholder"] = this.label;
  //   }
  // },
  mounted() {
    // console.log(this.xxx)
    // this.xxx = "default";
    // console.log(this.$options.propsData);
    // console.log(this.$data);
    // console.log("input" + this[model])
  }
};
</script>