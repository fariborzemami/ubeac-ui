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
    >
    <div 
      class="dropdown-menu p-0"
    >
      <sketch-picker 
        v-if="!hideSlider"
        disableAlpha
        v-model="colors"
      />
      <compact-picker
        v-if="hideSlider"
        v-model="colors" 
        :palette="defaultPallete"
        class="compact-padding"
      />
    </div>
  </div>
</template>

<script>
import Sketch from '@/modules/vue-color/src/lib-components/Sketch.vue';
import Compact from '@/modules/vue-color/src/lib-components/Compact.vue';
export default {
  components: {
    'sketch-picker': Sketch,
    'compact-picker': Compact
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
    hideSlider: {
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
    },
    defaultPallete: {
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
    modelValue () {
      this.selectedColor = this.modelValue
      this.onSelect()
    }
  },
  created () {
    window.onload = this.onLoad()
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

<style lang="scss">
  .compact-padding ul  {
    padding-left: 0 !important;
  }
</style>