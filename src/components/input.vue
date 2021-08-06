<template>
  <div
    v-show="visible"
    class="input-group"
    >
    <span 
      v-if="prepand"
      class="input-group-text"
      :id="`describe + ${id}`"
    >
      {{ prepand }}
    </span>
      <input 
          :type="type" 
          v-model="inputModel"
          class="form-control"
          :disabled="disabled"
          :placeholder="placeholder"
          :aria-label="text" 
          :aria-describedby="`describe + ${id}`"
          :id="id"
          :name="name"
          :pattern="inputValidation"
          :autofocus="autofocus"
          @input="onInput"
          @change="onChange"
          @click="onClick"
          @blur="onLeave"
      />
      <span 
          v-if="append"
          class="input-group-text"
          :id="`describe + ${id}`"
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
          this.phonePatternRegex.length - 1)).test(value)
      },
      emailRules: {
        pattern: value => RegExp(this.emailPatternRegex.substring(1, this.emailPatternRegex.length - 1)).test(value)
      }
    }
  },
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

