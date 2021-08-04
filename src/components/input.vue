<template>
  <div
    v-show="visible"
    class="input-group"
    >
    <span v-if="prepand"
          class="input-group-text"
          id="describe"
          >
          {{ prepand }}
    </span>
    <input 
      :type="type" 
      v-model="text"
      class="form-control"
      :disabled="disabled"
      :placeholder="placeholder" 
      :aria-label="placeholder" 
      aria-describedby="describe"
      @change="onChange"
    >
    <span v-if="append"
          class="input-group-text"
          id="describe"
      >
      {{ append }}
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: this.modelValue,
    }
  },
  props: {
    prepand: {
      type:  [Boolean, String],
      default: false
    },
    append: {
      type:  [Boolean, String],
      default: false
    },
    text: {
      type: String,
    },
    visible: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: String
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text",
      required: true
    },
    placeholder: {
      type: String
    },
    pattern: {
      type: [RegExp, String]
    },
    format: {
      type: String
    }
  }, 
  methods: {
    onChange () {
    this.$emit('onChange', this.textValue)
    }
  }
}
</script>

