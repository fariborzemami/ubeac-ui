<template>
  <div>
    <button
      v-bind="$attrs"
      :disabled="disabled"
      type="button"
      :class="cssClass"
    >
      {{ label }}
    </button>
  </div>
</template>
<script>
import { LabelMixin } from "../../mixins/component-mixins";
export default {
  inheritAttrs: false,
  mixins: [LabelMixin],
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cssClass: function() {
      if (this.type === "submit") return "btn btn-primary";
      return 'danger'
    }
  }
};
</script>