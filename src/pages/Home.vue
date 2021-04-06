<page layout="Full" title="Home Title" route="/" icon="test-icon" roles="ADMIN,UNKNWON">
  <u-content>
      <u-card title="Home page">Home page is here</u-card>
  </u-content>
</page>
<script>
export default {
  mounted() {
    console.log(this.core.pages);
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
