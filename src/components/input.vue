<template>
  <div
    v-show="visible"
    class="input-group"
  >
    <span 
      v-if="prepand"
      :id="`describe + ${id}`"
      class="input-group-text"
    >
      {{ prepand }}
    </span>
    <input 
      :id="id" 
      v-model="inputModel"
      :type="type"
      class="form-control"
      :disabled="disabled"
      :placeholder="placeholder" 
      :aria-label="text"
      :aria-describedby="`describe + ${id}`"
      :name="name"
      :pattern="inputValidation"
      :autofocus="autofocus"
      @input="onInput"
      @change="onChange"
      @click="onClick"
      @blur="onLeave"
    >
    <span 
      v-if="append"
      :id="`describe + ${id}`"
      class="input-group-text"
    >
      {{ append }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String
    }, 
    type: {
      type: String,
      default: "text"
    },
    pattern: {
      type: [RegExp, String]
    },
    placeholder: {
      type: String
    },
    mask: {
      type: String
    },
    format: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: true
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    id: {
      type: String,
      default () {
        // TODO: need id generator helper
        return 'inputGeneratedId' + Math.random().toString().split('.')[1]
      }
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
    prepand: {
      type:  [Boolean, String],
      default: false
    },
    append: {
      type:  [Boolean, String],
      default: false
    }
  }, 
  emits: ['update:modelValue'],
  data () {
    return {
      inputModel: this.modelValue,
      phoneRules: {
        pattern: value => RegExp(this.phonePatternRegex.substring(1,
          this.phonePatternRegex.length - 1)).test(value)
      },
      emailRules: {
        pattern: value => RegExp(this.emailPatternRegex.substring(1, this.emailPatternRegex.length - 1)).test(value)
      }
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
  },
  methods: {
    onInput () {
      this.$emit('update:modelValue', this.inputModel)
    }, 
    onChange (e) {
      this.$emit('onChange', e)
    }, 
    onClick (e) {
      this.$emit('onClick', e)
    },
    onLeave (e) {
      this.$emit('onLeave', e)
    }
  }
}
</script>

