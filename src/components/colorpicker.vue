<template>
  <div 
    v-show="visible"
    class="dropdown"
  >
    <input 
      :id="id"
      v-model="selectedColor"
      :disabled="disabled"
      :required="isRequired" 
      :autofocus="autofocus" 
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
      type="text"
      :name="name"
      @change="onChange"
      @load="onLoad"
      @select="onSelect"
    >
    <div 
      class="dropdown-menu p-0"
    >
      <sketch-picker 
        v-model="colors"
      />
    </div>
  </div>
</template>

<script>
import Sketch from '@/modules/vue-color/src/lib-components/Sketch.vue';
export default {
  components: {
    'sketch-picker': Sketch,
  },
  props: {
    modelValue: {
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
    autofocus: {
      type: Boolean,
      default: false
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: () => {
        return 'colorPickerGeneratedId' + Math.random().toString().split('.')[1]
      }
    },
    name: {
      type: String
    }
  },
  data () {
    return {
      selectedColor: this.modelValue,
      colors: {
        hex: this.modelValue
      }
    }
  },
  watch: {
    colors () {
      if (this.colors) {
        this.selectedColor = this.colors.hex
        this.$emit('update:modelValue', this.colors.hex)
      }
    },
  },
  methods: {
    onChange (e) {
      this.$emit('change', e)
    },
    onLoad (e) {
      this.$emit('load', e)
    },
    onSelect (e) {
      this.$emit('select', e)
    }
  }
}
 
</script>

