<template>
  <ext-datepicker
    :options="datepickerOptions"
    v-model="modelValue"></ext-datepicker>
</template>

<script>
import Datepicker from '@/modules/datepicker/dist/pwt-datepicker-vue.js'

export default {
  mounted () {
    this.selectedDate = this.modelValue
  },
  watch: {
    modelValue () {
      this.$emit('update:modelValue', this.modelValue)
    }
  },
  components: {
    ExtDatepicker: Datepicker
  },
  props: {
    options: {
      default () {
        return {}
      }
    },
    timepicker: {},
    modelValue: {}
  },
  computed: {
    datepickerOptions  () {
      return Object.assign({},this.defaultOptions, this.options)
    }
  },
  data () {
    let self = this
    const html = document.getElementsByTagName('html')[0]
    const currentDirection = html.getAttribute('dir')
    return {
      selectedDate: new Date().valueOf(),
      defaultOptions: {
        // TODO: it should be based on language not direction
        calendarType: (currentDirection == 'ltr') ? 'gregorian' : 'persian',
        onlyTimePicker: self.timepicker,
        timePicker: {
          enabled: false
        },
        toolbox: {
          enabled: !self.timepicker     
        },
        navigator: {
          enabled: !self.timepicker     
        },
        infobox: {
          enabled: !self.timepicker     
        }
      }
    }
  }
}
</script>

<style lang="scss">
/*!rtl:begin:ignore*/
@import '../modules/datepicker/dist/pwt-datepicker.css';
/*!rtl:end:ignore*/
</style>
