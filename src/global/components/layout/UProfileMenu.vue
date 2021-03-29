<template>
  <div class="nav">
    <h1>Profile Menu</h1>
    <div v-for="item in items" v-bind:key="item.href">
      <b
        ><router-link :to="item.href">{{ item.title }}</router-link></b
      >
      <div v-for="child in item.children" v-bind:key="child">
        <router-link :to="child.href">{{ child.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMenu",
  props: {
    items: Array
  },
};
</script>

<style scoped>
.nav {
  float: right;
  width: 15%; 
  background: #ccc;
  padding: 20px;
}
</style>