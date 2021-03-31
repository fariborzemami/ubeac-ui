<template layout="Full" title="Home Title" routes="/,/home" icon="test-icon" roles="ADMIN,UNKNWON">
  <u-content><h1>This is home page! {{ amir }}xxxxx</h1>
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
  }
}
</script>
