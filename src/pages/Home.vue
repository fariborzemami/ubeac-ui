<page layout="Full" title="Home Title" route="/" icon="test-icon" roles="ADMIN,UNKNWON">
<u-card title="Home">This is Home page</u-card>
</page>
<script>
export default {
  mounted() {
    console.log(this.core.pages);
  },
  data() {
    return {
      amir: 123123123,
    };
  },
};
</script>
