<template>
  <div
    v-show="visible"
    :dir="dir"
    >
  <vue-select 
    v-model="selected"
    :options="items"
    :disabled="disabled"
    :loading="loading"
    :multiple="multiple"
    :max="maxSelectItems"
    :placeholder="placeholder"
    :searchable="searchable"
    :close-on-select="closeOnSelect"
    :label-by="labelBy"
    @update:modelValue="onChange"
    />
  </div>
</template>

<script>
import VueNextSelect from 'vue-next-select'

export default {
  components: {
    'vue-select': VueNextSelect,
  },
  data () {
    return {
      selected: this.modelValue
    }
  },
  props: {
    modelValue: {
      type: String
    },
    items: {
      type: [Array, Object],
      default: []
    },
    id: {
      type: String
    },
    label: {
      type: String
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    maxSelectItems: {
      type: Number
    },
    placeholder: {
      type: String,
      default: ''
    },
    searchable: {
      type: Boolean,
      default: false
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    dir: {
      type: String,
      default: 'ltr'
    },
    labelBy: {
      type: String,
      default: 'key'
    }
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    onChange (e) {
      this.$emit('update:modelValue', this.selected)
      this.$emit('change', e)
    }
  }
}
</script>

