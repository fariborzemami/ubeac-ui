<template>
  <q-layout
    view="lHh lpr lFf"
    container
    style="height: 400px"
    class="shadow-2 rounded-borders"
  >
    <q-page-container class="shadow-2 rounded-borders">
      <q-page padding>
        {{label}}
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "Container",
    },
  },
};
</script>
