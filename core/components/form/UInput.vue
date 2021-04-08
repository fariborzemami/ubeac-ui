<template>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">{{ label }}</label>
    <div class="col-sm-10">
      <input
        v-bind="$attrs"
        :modelValue="value"
        type="text"
        class="form-control"
      />
    </div>
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
  data() {
    return {
      searchText: "",
      // xxx: this.$parent._data.model["email"],
    };
  },
  // methods: {
  //   onInput(event) {
  //     this.$emit("input", event.target.value);
  //   }
  // },
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
  },
};
</script>