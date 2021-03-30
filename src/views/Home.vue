<template>
  <u-content><h1>This is home page! {{ page.title }}</h1>
  </u-content>
</template>
<page>
{
  "layout": "Full",
  "title": "Home Title",
  "description": "Description for the home page goes here!",
  "routes":["/", "/home"],
  "icon": "test-icon",
  "roles":["ADMIN", "UNKNWON"]
}
</page>
<script>
export default {
  data() {
    return {
      amir: 123123123
    };
  },
  mounted() {
  }
};
</script>
