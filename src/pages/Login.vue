<page layout="Blank" title="Login Title" route="/login" icon="test-icon" roles="?">
  <u-form title="Login">
    <u-form-content columns="2">
      <u-form-input
        id="email"
        v-model="model.email"
        type="email"
        label="Email"
        placeholder="Type your email"
        required
        autofocus
      />
      <u-form-input
        id="password"
        v-model="model.password"
        type="password"
        label="Password"
        placeholder="Type your password"
        required
      />
    </u-form-content>
    <u-form-actions>
      <u-btn-submit :color="color" @click="onSubmit"></u-btn-submit>
      <u-btn :color="color" disabled>Cancel</u-btn>
    </u-form-actions>
  </u-form>
</page>
<script>
export default {
  data() {
    return {
      color:"secondary",
      model: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.model)
      this.color="primary"
    }
  }
};
</script>