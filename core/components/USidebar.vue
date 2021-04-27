<template>
  <div class="card">
    <div class="card-header">Sidebar Menu</div>
    <ul
      class="list-group list-group-flush"
      v-for="item in items"
      v-bind:key="item.href"
    >
      <li class="list-group-item">
        <router-link :to="item.href">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
  props: {
    items: Array
  }
};
</script>