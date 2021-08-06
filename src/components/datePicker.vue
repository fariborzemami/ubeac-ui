<template>
  <div
    v-if="visible"
    >
    <!--<u-persian-datetime-picker-->
      <!--v-model="date"-->
      <!-->-->
    <!--</u-persian-datetime-picker>-->
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    value: {
      type: [Date, String]
    },
    format: {
      type: String,
      default: 'yyyyMMdd'
    },
    placeholder: {
      type: String
    },
    firstDayOfWeek: {
      type: Number,
      default: 6
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    visible: {
      type: Boolean,
      default: true
    },
  },
  date () {
    return {
      date: ''
    }
  },
  methods: {
    onLoad () {},
    onClose () {},
    opened () {},
    select () {},
    formatter () {}
  }
}
</script>

