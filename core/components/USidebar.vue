<template>
  <q-list padding separator class="rounded-borders text-primary">
    <q-item
      :to="item.href"
      v-for="item in items"
      v-bind:key="item.href"
      clickable
      v-ripple
      active-class="bg-teal-1" :active="active"
    >
      <q-item-section avatar>
        <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section>{{ item.title }}</q-item-section>
    </q-item>
  </q-list>
</template>
<script>
import { ref } from 'vue'

export default {
  name: "SidebarMenu",
   setup () {
    return {
      active: ref(true)
    }
  },
  props: {
    items: Array,
  },
};
</script>
