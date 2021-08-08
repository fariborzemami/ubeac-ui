<route lang="yaml">
name: RTL Support
meta:
  layout: full
</route>

<template>
  <DemoHeader
    title="RTL Support"
  ></DemoHeader>
  <u-button
    variant="success"
    @click="toggleLayoutDirection()"
    text="Toggle Layout Direction"
    size="md"
    icon="format_textdirection_l_to_r"
    >
  </u-button>
</template>

<script setup>
// NOTE: it could move to global helper functions 
const toggleLayoutDirection = function () {
  const html = document.getElementsByTagName('html')[0]
  const currentDirection = html.getAttribute('dir')
  if (currentDirection == 'ltr') {
    html.setAttribute('dir', 'rtl')
  }
  else {
    html.setAttribute('dir', 'ltr')
  }
}
</script>
