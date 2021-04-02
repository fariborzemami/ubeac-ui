<page layout="Full" title="Home Title" route="/" icon="test-icon" roles="ADMIN,UNKNWON">
  <h1>Home page</h1>
</page>
<script>
export default {
  mounted() {
    console.log(this.pages);
  },
  data() {
    return {
      amir: 123123123
    };
  },
};
</script>
<style scoped>
.a {
  columns: 2;
}
</style>
