<page layout="Blank" title="Register Title" route="/register" icon="test-icon" roles="?">
  <div>
    <h1>Register page</h1>
    <u-btn label="Change my layout!!!!" @click="changeLayout" />
  </div>
</page>

<script>
export default {
  methods: {
    changeLayout() {
      this.$route.meta.layout = "Full";
    }
  }
};
</script>