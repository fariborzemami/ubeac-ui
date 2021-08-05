<template>
  <div
    v-show="visible"
    class="input-group"
    >
    <span 
      v-if="prepand"
      class="input-group-text"
      id="describe"
    >
      {{ prepand }}
    </span>
      <input 
          :type="type" 
          v-model="inputModel"
          class="form-control"
          :class="`border-${borderColor}`"
          :disabled="disabled"
          :placeholder="placeholder" 
          :aria-label="text" 
          aria-describedby="describe"
          @change="onChange"
          :pattern="inputValidation"
      >
      <span 
          v-if="append"
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
      inputModel: this.modelValue,
      phoneRules: {
        pattern: value => RegExp(this.phonePatternRegex.substring(1,
          this.phonePatternRegex.length - 1)).test(value) || this.phonePatternMessage
      },
      emailRules: {
        pattern: value => RegExp(this.emailPatternRegex.substring(1, this.emailPatternRegex.length - 1)).test(value) || this.emailPatternMessage
      }
    }
  },
  props: {
    modelValue: {
      type: String
    }, 
    emailPatternRegex: {
      type: String,
      default: '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$/',
      required: false
    },
    phonePatternRegex: {
      type: String,
      default: '(\+98|0)?9\d{9}',
      required: false
    },
    borderColor: {
      type: String
    },
    prepand: {
      type:  [Boolean, String],
      default: false
    },
    append: {
      type:  [Boolean, String],
      default: false
    },
    text: {
      type: String
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
  emits: ['update:modelValue'],
  methods: {
    onChange () {
    this.$emit('onChange', this.inputModel)
    }
  },
  computed: {
    inputValidation () {
      if (this.pattern === 'email') {
        console.log(this.pattern)
        return [this.emailRules.required, this.emailRules.pattern, this.borderColor === 'warning']
      } else if (this.pattern === 'phone') {
        return [this.phoneRules.required, this.phoneRules.pattern]
      } else {
      return ''
      }
    }
  }
}
</script>

