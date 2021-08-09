<template>
  <header
    style="height: 46px;"
    class="w-100 mb-2"
  >
    <h1
      class="h2 mt-1 w-25 float-start"
    >
      {{ title }}
    </h1>
    <u-link
      v-if="editLink"
      target="blank"
      class="mx-2 float-end mt-3"
      :route="editLink"
    >
      <span>
        Edit This Page!
      </span>
      <u-icon
        size="small"
        style="float: left;"
        class="me-2"
        icon="edit" 
      />
    </u-link>
  </header>
</template>

<script>
export default {
  props: {
    editLink: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: [String],
      default: ''
    }
  }
}
</script>
